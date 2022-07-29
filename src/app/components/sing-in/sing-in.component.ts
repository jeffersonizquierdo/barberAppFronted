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

  id:number;
  cellphone: string;
  city: string;
  email:string;
  nickname: string
  password: string;
  type_user: Number;
  
  mostrar(){
    console.log(this.type_user);
  }


  saveUser()  {

    let newUser = new user(this.id, this.cellphone, this.city, this.email, this.nickname, this.password, this.type_user);

    this.userService.saveUser(newUser).subscribe(
      response => console.log(response)
    );;

    this.router.navigate(['login'])

  }

}
