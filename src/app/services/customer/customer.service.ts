import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveCustomer(newCustomer: Customer): Observable<Customer>{

  return this.http.post<Customer>("http://localhost:8080/customer/save", newCustomer, {headers: this.httpHeadres}).pipe(


    catchError(e =>{

      console.error(e.error.Mensaje);
      Swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    }



  ));

  }
}
