import { user } from './../../models/User';
import { Component, OnInit, Output } from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Router } from '@angular/router';
import { Barbershop } from 'src/app/models/barbershop';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private userService:UserServiceService, private router: Router, private barbershopService: BarbershopService) { }

  ngOnInit(): void { 
  }
  
  // variables para mostrar campos en el dom
  registrerBarbershop = false;
  registrerBarber = false;
  registrerCustomer = false;
  

  // User Data
  id:number;
  cellphone: string;
  city: string;
  email:string;
  nickname: string
  password: string;
  typeUser: Number;

  // Barbershop Data
  locationBarbershop:string;
  descriptionbarbershop:string

  // Barber Data
  dateBarber:Date;
  genderBarber: string;
  descriptionbarber:string

  // Customer Data
  dateCustomer:Date;
  genderCustomer:string;


  //Objetos 
  newUser:user
  newBarbershop: Barbershop;


  dataTypeUser (value : number){

    if (value == 1){
      this.registrerCustomer = false;
      this.registrerBarber = false;
      this.registrerBarbershop = true; 
    } else if (value == 2){
      this.registrerCustomer = false;
      this.registrerBarbershop = false;
      this.registrerBarber = true;
    } else if (value == 3){
      this.registrerBarber = false;
      this.registrerBarbershop = false;
      this.registrerCustomer = true; 
    } 
    else{
      this.registrerBarbershop = false;
      this.registrerBarber = false;
      this.registrerCustomer = false;
    }
 
  }

  saveUser() {

    if (this.typeUser == 1) this.saveBarbershop(this.newUser,  this.newBarbershop)    
  }

  saveBarbershop(newUser:user, newBarbershop: Barbershop){

    newUser = new user(this.id, this.cellphone, this.city, this.email, this.nickname, this.password, this.typeUser);

    this.userService.saveUser(newUser).subscribe(
      response => console.log(response)
    );
    newBarbershop = new Barbershop(newUser.id, this.descriptionbarbershop, this.locationBarbershop, 0);

    this.barbershopService.saveBarbeshop(newBarbershop).subscribe(
      response => console.log(response)
    );
  }

}
