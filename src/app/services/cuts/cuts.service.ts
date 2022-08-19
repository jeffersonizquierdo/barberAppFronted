import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Cuts} from 'src/app/models/Cuts';

@Injectable({
  providedIn: 'root'
})
export class CutsService {

  constructor(private httpClient: HttpClient) { }

  savecuts(newcuts: Cuts): Observable<Cuts>{

    return this.httpClient.post<Cuts>("http://localhost:8080/promotions/save", newcuts)
  }
}