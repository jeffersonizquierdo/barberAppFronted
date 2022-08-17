import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from 'src/app/models/Pomotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private httpClient: HttpClient) { 
    
  }

  savePromotion(newCatalogue: Promotion): Observable<Promotion>{

    return this.httpClient.post<Promotion>("http://localhost:8080/promotions/save", newCatalogue)
  }

  listPromotion():  Observable<Promotion>{
    return  this.httpClient.get<Promotion>(`http://localhost:8080/barbershop/consultPromotion/${1}`)
  } 


  deletepromotion(id: Number) {
    return this.httpClient.delete<Promotion>( ` http://localhost:8080/promotions/delete/${id}`)
  }

}
