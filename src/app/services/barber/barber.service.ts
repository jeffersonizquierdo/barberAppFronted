import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Barber } from 'src/app/models/Barber';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(private http:HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveBarber(newBarber: Barber): Observable<any>{

    return this.http.post<any>("http://localhost:8080/barber/save", newBarber, {headers: this.httpHeadres}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }
}
