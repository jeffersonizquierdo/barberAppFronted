import  swal  from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
<<<<<<< HEAD
import { catchError, Observable, throwError } from 'rxjs';
=======
import { Observable, catchError, throwError } from 'rxjs';
>>>>>>> 49822602bd0dd85b0174ddc3d481695afc255c83
import { Customer } from 'src/app/models/Customer';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveCustomer(newCustomer: Customer): Observable<any>{

<<<<<<< HEAD
  return this.http.post<Customer>("http://localhost:8080/customer/save", newCustomer, {headers: this.httpHeadres}).pipe(


    catchError(e =>{

      console.error(e.error.Mensaje);
      Swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    }



  ));
=======
    return this.http.post<any>("http://localhost:8080/customer/save", newCustomer, {headers: this.httpHeadres}).pipe(


      catchError(e => {

        console.error(e.error.Mensaje);
        swal.fire(e.error.Mensaje, e.error.Error, 'error');
        return throwError(e)

      })
    

    )
>>>>>>> 49822602bd0dd85b0174ddc3d481695afc255c83

  }
}
