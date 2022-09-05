import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Linkear } from 'src/app/models/linkear';
import { Usuario } from 'src/app/models/Usuario';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LinkearService {

 

  constructor(private http:HttpClient, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  }

  saveLinkear(newLinkear: Linkear): Observable<Linkear>{
  
    return this.http.post<Linkear>(`http://localhost:8080/bonding/save`, newLinkear, {headers: this.agregarAuthorizationHeader()}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }

  listLinkear():  Observable<Linkear>{

    return  this.http.get<Linkear>("http://localhost:8080/bonding/consultall", {headers: this.agregarAuthorizationHeader()} )
  }

  updateLinkear(linkear: Linkear): Observable<Linkear>{
  
    return this.http.put<Linkear>(`http://localhost:8080/bonding/update/${linkear.id}`, linkear, {headers: this.agregarAuthorizationHeader()}).pipe(

    catchError(e =>{

      console.error(e.error.Mensaje);
      swal.fire(e.error.Mensaje, e.error.Error, 'error');
      return throwError(e);
    })
    )
    
  }

  deleteLinker(id:Number):any{
    return  this.http.delete<Linkear>(`http://localhost:8080/bonding/delete/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

}
