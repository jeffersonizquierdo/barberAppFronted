import { Usuario } from './../../models/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient, private router:Router, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){

      return this.httpHeadres.append('Authorization', 'Bearer' + token);
    }

    return this.httpHeadres

  }

  updateUsuario(usuario:Usuario) : Observable<Usuario>{

    console.log("id usuario");
    console.log(usuario);
    
    

    return this.http.put<Usuario>("http://localhost:8080/usuario/update/"+usuario.id, {headers: this.agregarAuthorizationHeader()}).pipe(

    )

  }


  getUser(id : Number){

    return this.http.get<Usuario>(`http://localhost:8080/usuario/consult/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(

      catchError(e =>{

        //this.isNoAuthorizado(e)
        return throwError(e)

      })
    )

  }


  private isNoAuthorizado(e):Boolean{

    if(e.status == 401 || e.status == 403){

      if (this.authService.isAuthenticated()){
        this.authService.logout();
      }
      this.router.navigate(['/login'])
      return true;
    }

    return false;

  }


  saveUsuario(newUsuario:Usuario): Observable<Usuario>{

    console.log(newUsuario);
    

    return this.http.post<Usuario>("http://localhost:8080/usuario/save", newUsuario, {headers: this.httpHeadres}).pipe(

      catchError(e =>{

        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.Error, 'error');
        
        return throwError(e);
      }

    ))

  }




}
