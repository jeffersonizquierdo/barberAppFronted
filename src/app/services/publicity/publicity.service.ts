import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Publicity } from 'src/app/models/Publicity';
import { Usuario } from 'src/app/models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class PublicityService {
  usuario:Usuario = this.authService.usuario

  constructor(private httpClient: HttpClient, private authService: AuthServices) { }

  private httpHeadres = new HttpHeaders({ 'Content-Type' : 'application/json'})

  savePublicity(newPublicity:Publicity): Observable<Publicity>{

    return this.httpClient.post<Publicity>("http://localhost:8080/publication/save", newPublicity, {headers: this.agregarAuthorizationHeader()})
  }

  
  listPublicity():  Observable<Publicity>{

    return  this.httpClient.get<Publicity>("http://localhost:8080/publication/consultall", {headers: this.agregarAuthorizationHeader()} )
  }

  
  listpublicyid(){
    return  this.httpClient.get<Publicity>(`http://localhost:8080/publication/consult/${this.usuario.id}`, {headers: this.agregarAuthorizationHeader()})
  }


  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token + " tokennnnn");

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  } 
}
