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

  newUser: user={id:1, name:'Jefferson', email:'jeffersondavid803@gmail.com',
        password:'123', typeuser:1}

  saveUser(){
    this.userService.saveUser(this.newUser).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login'])
      }, err => console.log(err));
  }

}
