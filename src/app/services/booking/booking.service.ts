import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Booking } from 'src/app/models/Booking';
import { Usuario } from 'src/app/models/Usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

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

  saveBooking(newBooking: Booking): Observable<any>{

    return this.http.post<any>("http://localhost:8080/booking/save", newBooking, {headers: this.agregarAuthorizationHeader()}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      Swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }

  getBooking(id : Number):  Observable<Booking>{
    return  this.http.get<Booking>(`http://localhost:8080/booking/consult/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(
      catchError(e =>{
        return throwError(e)

      })

    )
  }

  listBooking():  Observable<Booking>{
    return  this.http.get<Booking>(`http://localhost:8080/booking/consultall`, {headers: this.agregarAuthorizationHeader()})
  }
  
  updateBooking(booking: Booking): Observable<Booking>{
    return this.http.put<Booking>(`http://localhost:8080/booking/update/${booking.id}`, booking, {headers: this.agregarAuthorizationHeader()}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      Swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }
}
