import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { catchError, Observable, throwError } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';
import Swal from 'sweetalert2';

=======
import { Observable, catchError, throwError } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';
swal
>>>>>>> 49822602bd0dd85b0174ddc3d481695afc255c83

@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveBarbeshop(newBarbershop:Barbershop): Observable<Barbershop>{

    return this.http.post<Barbershop>("http://localhost:8080/barbershop/save", newBarbershop, {headers: this.httpHeadres}).pipe(
<<<<<<< HEAD

      catchError(e =>{

        console.error(e.error.Mensaje);
        Swal.fire(e.error.Mensaje, e.error.Error, 'error');
        return throwError(e);
      })

    )
=======
>>>>>>> 49822602bd0dd85b0174ddc3d481695afc255c83

    catchError(e => {

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);

    }));
  }

<<<<<<< HEAD
=======


>>>>>>> 49822602bd0dd85b0174ddc3d481695afc255c83
}