import { user } from './../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private userService:UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  id:Number = 1;
  name:string;
  city: string;
  typeuser: Number;
  email:string;
  password: string;

  saveUser(){


    let newUser = new user(this.id, this.name, this.city, this.typeuser, this.email, this.password);


    this.userService.saveUser(newUser);
=======
  newUser: user={id:1, name:'Jefferson', email:'jeffersondavid803@gmail.com',
        password:'123', typeuser:1}

  saveUser(){
    this.userService.saveUser(this.newUser).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login'])
      }, err => console.log(err));
>>>>>>> 6ce734748ec467e6c1957f825bde3d0c4dfb2e2a
  }

}
