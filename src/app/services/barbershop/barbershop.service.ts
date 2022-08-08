import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';

@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  private httpHeadres = new HttpHeaders({'Content-Type' : 'application/json'})

  saveBarbeshop(newBarbershop:Barbershop): Observable<Barbershop>{

    return this.http.post<Barbershop>("http://localhost:8080/barbershop/save", newBarbershop, {headers: this.httpHeadres});

  }

}
