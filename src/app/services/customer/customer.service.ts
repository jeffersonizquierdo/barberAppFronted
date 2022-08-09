import  swal  from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveCustomer(newCustomer: Customer): Observable<any>{

    return this.http.post<any>("http://localhost:8080/customer/save", newCustomer, {headers: this.httpHeadres}).pipe(


      catchError(e => {

        console.error(e.error.Mensaje);
        swal.fire(e.error.Mensaje, e.error.Error, 'error');
        return throwError(e)

      })
    

    )

  }
}
