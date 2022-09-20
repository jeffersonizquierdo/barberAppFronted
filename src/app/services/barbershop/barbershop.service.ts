import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Usuario } from 'src/app/models/Usuario';
import { Publicity } from 'src/app/models/Publicity';
@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({ 'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;
.0
  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token + " tokennnnn");

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  } 

  saveBarbeshop(newBarbershop:Barbershop): Observable<Barbershop>{

    return this.http.post<Barbershop>(`http://localhost:8080/barbershop/save`, newBarbershop, {headers: this.agregarAuthorizationHeader()}).pipe(
     
      catchError(e =>{
        console.log("entro a guardar")
        if(this.isNoAuthorizado(e)){
          console.log("paila")
          return throwError(e)

        }

        console.error(e.error.Mensaje);
        swal.fire(e.error.Mensaje, e.error.Error, 'error');
        
        return throwError(e);
      }));
      
  }

  listBarbershop():  Observable<Barbershop>{

    return  this.http.get<Barbershop>(`http://localhost:8080/barbershop/consultall`, {headers: this.agregarAuthorizationHeader()})
  } 

  ListBarbershopid(): Observable<Barbershop>{
    return  this.http.get<Barbershop>(`http://localhost:8080/barbershop/consult/${this.usuario.id}`, {headers: this.agregarAuthorizationHeader()})
  }

  listBarber():  Observable<Barber>{

    return  this.http.get<Barber>(`http://localhost:8080/barbershop/consultbarber/${this.usuario.id}`, {headers: this.agregarAuthorizationHeader()})
  }
    
  listpublicyid(id): Observable<Publicity>{
    console.log("holi 3 " + id)
    return  this.http.get<Publicity>(`http://localhost:8080/barbershop/consultpublication/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

  getbarber(id : Number):  Observable<Barbershop>{

    return  this.http.get<Barbershop>(`http://localhost:8080/barbershop/consult/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(

      catchError(e =>{

        this.isNoAuthorizado(e)
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

  

}