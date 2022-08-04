import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barbershop } from 'src/app/models/barbershop';

@Injectable({
  providedIn: 'root'
})
export class BarbershopService {

  constructor(private http: HttpClient) { }

  saveBarbeshop(newBarbershop:Barbershop): Observable<Barbershop>{

    return this.http.post<Barbershop>("http://localhost:8080/barbershop/save", newBarbershop);

  }

}
