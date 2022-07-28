import { user } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient, private router: Router) { }


  saveUser(newUser: user){

    return this.http.post<user>("http://localhost:8080/user/save", newUser).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login'])
      }, err => console.log(err));;
  }

}
