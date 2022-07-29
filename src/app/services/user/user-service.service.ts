import { user } from 'src/app/models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  private httpHeaders = new HttpHeaders({'Contet-type': 'application/json'})

  constructor(private http: HttpClient) { }


  saveUser(newUser: user): Observable<user>{

    return this.http.post<user>("http://localhost:8080/user/save", newUser);
  }

}
