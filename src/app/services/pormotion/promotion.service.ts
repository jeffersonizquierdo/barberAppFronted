import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServices } from 'src/app/models/AuthServices';
import { Promotion } from 'src/app/models/Pomotion';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private httpClient: HttpClient, private authService: AuthServices) { 
  
  }

  private httpHeadres = new HttpHeaders({ 'Content-Type' : 'application/json'})

  usuario:Usuario = this.authService.usuario;

  private agregarAuthorizationHeader(){

    let token = this.authService.token

    if (token != null){
      console.log(token + " tokennnnn");

      return this.httpHeadres.append('Authorization', 'Bearer ' + token);
    }

    return this.httpHeadres

  } 


  savePromotion(newCatalogue: Promotion): Observable<Promotion>{


    return this.httpClient.post<Promotion>("https://barberappback.herokuapp.com/promotions/save", newCatalogue, {headers: this.agregarAuthorizationHeader()})
  }

  listPromotion():  Observable<Promotion>{
    return  this.httpClient.get<Promotion>(`https://barberappback.herokuapp.com/consultpromotion/${this.usuario.id}`, {headers: this.agregarAuthorizationHeader()})
  } 

  listallPromotion():  Observable<Promotion>{
    return  this.httpClient.get<Promotion>(`https://barberappback.herokuapp.com/promotions/consultall`, {headers: this.agregarAuthorizationHeader()})
  } 


  deletepromotion(id: Number) {
    return this.httpClient.delete<Promotion>( `https://barberappback.herokuapp.com/promotions/delete/${id}`, {headers: this.agregarAuthorizationHeader()})
  }

}


