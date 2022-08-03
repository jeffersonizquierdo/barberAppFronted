import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barber } from 'src/app/models/Barber';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(private http:HttpClient) { }


  saveBarber(newBarber: Barber): Observable<Barber>{

    return this.http.post<Barber>("http://localhost:8080/barber/save", newBarber)
  }
}
