import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveBarbeshop(newBarbershop:Barbershop): Observable<Barbershop>{

    return this.http.post<Barbershop>("http://localhost:8080/barbershop/save", newBarbershop, {headers: this.httpHeadres}).pipe(


      catchError(e =>{

        if(this.isNoAuthorizado(e)){
          return throwError(e)
        }

        console.error(e.error.Mensaje);
        swal.fire(e.error.Mensaje, e.error.Error, 'error');
        
        return throwError(e);
      }));
  }


<<<<<<< HEAD
  listBarber():  Observable<Barbershop>{
    return  this.http.get<Barbershop>(`http://localhost:8080/barbershop/consultall`)
  } 


=======
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



  private addAuthorizationHeader(){

    let token = this.authService;

    if (token != null){

      return this.httpHeadres.append('Authorization', 'Bearer' + token)
    }

    return this.httpHeadres

  }
>>>>>>> 6a618756b0861c4021fa2b7f009509e676c7b6f5

}