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

  id:Number = 1;
  name:string;
  city: string;
  typeuser: Number;
  email:string;
  password: string;

  saveUser(){


    let newUser = new user(this.id, this.name, this.city, this.typeuser, this.email, this.password);


    this.userService.saveUser(newUser);
  }

}
