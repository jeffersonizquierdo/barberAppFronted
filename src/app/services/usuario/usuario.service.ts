import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usaurio } from 'src/app/models/Usuario';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient, private router:Router, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})


  saveUsuario(newUsuario:Usaurio): Observable<Usaurio>{

    console.log(newUsuario);
    

    return this.http.post<Usaurio>("http://localhost:8080/usuario/save", newUsuario, {headers: this.httpHeadres}).pipe(

      catchError(e =>{


        console.error(e.error.Mensaje);
        Swal.fire(e.error.Mensaje, e.error.Error, 'error');
        
        return throwError(e);
      }

    ))

  }

}
