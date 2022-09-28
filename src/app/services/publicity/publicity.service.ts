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

    console.log("llego");
    console.log(newPublicity.id_barbershop);
        

    return this.httpClient.post<Publicity>("https://barberappback.herokuapp.com/publication/save", newPublicity, {headers: this.agregarAuthorizationHeader()})
  }

  
  listPublicity():  Observable<Publicity>{

    return  this.httpClient.get<Publicity>("https://barberappback.herokuapp.com/publication/consultall", {headers: this.agregarAuthorizationHeader()} )
  }

  deleteplubication(id: Number) {
    return this.httpClient.delete<Publicity>( `https://barberappback.herokuapp.com/publication/delete/${id}`, {headers: this.agregarAuthorizationHeader()})
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
