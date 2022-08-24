import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicity } from 'src/app/models/Publicity';


@Injectable({
  providedIn: 'root'
})
export class PublicityService {

  constructor(private httpClient: HttpClient) { }

  savePublicity(newPublicity:Publicity): Observable<Publicity>{

    return this.httpClient.post<Publicity>("http://localhost:8080/publication/save", newPublicity)
  }

  listPublicity():  Observable<Publicity>{

    return  this.httpClient.get<Publicity>("http://localhost:8080/publication/consultall")
  }
}
