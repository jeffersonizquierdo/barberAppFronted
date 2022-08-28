import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Usuario } from 'src/app/models/Usuario';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(private http:HttpClient, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token + " tokennnnn");

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  } 

  saveBarber(newBarber: Barber): Observable<any>{

    return this.http.post<any>("http://localhost:8080/barber/save", newBarber, {headers: this.agregarAuthorizationHeader()}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }

  listBarber():  Observable<Barber>{

    return  this.http.get<Barber>(`http://localhost:8080/barber/consultall`, {headers: this.agregarAuthorizationHeader()})
  }

}
