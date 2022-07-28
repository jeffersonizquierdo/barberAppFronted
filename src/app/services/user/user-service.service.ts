import { user } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  url= "http://localhost:8080/user";

  saveUser(newUser: user){

    return this.http.post(this.url+"/save", newUser);
  }

}
