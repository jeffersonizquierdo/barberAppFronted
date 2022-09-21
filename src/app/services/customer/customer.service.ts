import  swal  from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usuario } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private authService: AuthServices, private router: Router) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token);

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  }



    getCustomer(id : Number):  Observable<Customer>{
      console.log("holi")

    return  this.http.get<Customer>(`http://localhost:8080/customer/consult/${id}`, {headers: this.agregarAuthorizationHeader()}).pipe(

      catchError(e =>{
        this.isNoAuthorizado(e)
        return throwError(e)

      })

    )
  }

  updatecustomer(customer:Customer) : Observable<Customer>{

    return this.http.put<Customer>(`http://localhost:8080/customer/update/${customer.id}`, {headers: this.agregarAuthorizationHeader()}).pipe(

      catchError(e =>{
        this.isNoAuthorizado(e)
        return throwError(e)

      })

    )

  }



  saveCustomer(newCustomer: Customer): Observable<any>{

  return this.http.post<Customer>("http://localhost:8080/customer/save", newCustomer, {headers: this.agregarAuthorizationHeader()}).pipe(


    catchError(e =>{

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    }

  ));

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
