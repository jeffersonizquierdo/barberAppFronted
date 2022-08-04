import { user } from './../../models/User';
import { Component, OnInit} from '@angular/core';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Router } from '@angular/router';
import { Barbershop } from 'src/app/models/barbershop';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Barber } from 'src/app/models/Barber';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private userService:UserServiceService, private router: Router, private barbershopService: BarbershopService,
    private customerService: CustomerService, private barberService: BarberService) { }

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
  descriptionBarber:string
  idCatalogue:Number

  // Customer Data
  dateCustomer:Date;
  genderCustomer:string;


  //Objetos 
  newUser:user
  newBarbershop: Barbershop;
  newCustomer: Customer;
  newBarber:Barber;


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

    if (this.typeUser == 1) this.saveBarbershop(this.newUser, this.newBarbershop);
    if (this.typeUser == 2) this.saveBarber(this.newUser, this.newBarber)
    if (this.typeUser == 3) this.saveCustomer(this.newUser, this.newCustomer);
  }

  ////////////////////////////////////////////////////////////////////
  saveBarbershop(newUser:user, newBarbershop: Barbershop){

    newUser = new user(this.id, this.cellphone, this.city, this.email, this.nickname, this.password, this.typeUser);
    this.userService.saveUser(newUser).subscribe(
      response => console.log(response)
    );
    newBarbershop = new Barbershop(this.id, newUser.email, this.descriptionbarbershop, this.locationBarbershop, 0);
    this.barbershopService.saveBarbeshop(newBarbershop).subscribe(
      response => console.log(response)
    );
  }

  ////////////////////////////////////////////////////////////////////
  saveBarber(newUser:user, newBarber:Barber){

    newUser = new user(this.id, this.cellphone, this.city, this.email, this.nickname, this.password, this.typeUser);
    this.userService.saveUser(newUser).subscribe(
      response => console.log(response)
    );
    newBarber = new Barber(this.id, this.dateBarber,this.email, this.descriptionBarber,this.genderBarber, 0, 1)
    this.barberService.saveBarber(newBarber).subscribe(
      response => console.log(response)
    );
  }


  ////////////////////////////////////////////////////////////////////
  saveCustomer(newUser: user, newCustomer: Customer){

    newUser = new user(this.id, this.cellphone, this.city, this.email, this.nickname, this.password, this.typeUser);

    this.userService.saveUser(newUser).subscribe(
      response => console.log(response)
    );
    newCustomer = new Customer(this.id, this.dateCustomer, newUser.email, this.genderCustomer);
    this.customerService.saveCustomer(newCustomer).subscribe(
      response => console.log(response)
    );
  }

}
