import  swal  from 'sweetalert2';
import { Component, OnInit} from '@angular/core';
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

  constructor(private router: Router, private barbershopService: BarbershopService,
    private customerService: CustomerService, private barberService: BarberService) { }

  ngOnInit(): void { 
  }
  
  // variables para mostrar campos en el dom
  registrerBarbershop = false;
  registrerBarber = false;
  registrerCustomer = false;
  

  // General Data
  id:number;
  email:string;
  password: string;
  nickname: string
  city: string;
  cellphone: string;
  typeUser: Number;
  photo:string;

  // Barbershop Data
  locationBarbershop:string;
  descriptionBarbershop:string
  idCatalogue:Number;

  // Barber Data
  ageBarber:Date;
  descriptionBarber:string

  // Customer Data
  ageCustomer:Date;


  //Objetos 
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

    if (this.typeUser == 1) this.saveBarbershop(this.newBarbershop);
    if (this.typeUser == 2) this.saveBarber( this.newBarber)
    if (this.typeUser == 3) this.saveCustomer( this.newCustomer);
  }

  ////////////////////////////////////////////////////////////////////
  saveBarbershop(newBarbershop: Barbershop){

    newBarbershop = new Barbershop(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.descriptionBarbershop, this.locationBarbershop, 0, this.idCatalogue);
    this.barbershopService.saveBarbeshop(newBarbershop).subscribe(
      
      response => {

        console.log(response);
        swal.fire('Nuevo Cliente', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
        this.router.navigate(['/login'])

      }
      
      
    );

    
  }

  ////////////////////////////////////////////////////////////////////
  saveBarber(newBarber:Barber){

    newBarber = new Barber(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageBarber, this.descriptionBarber, 0)
    this.barberService.saveBarber(newBarber).subscribe(
      response =>{

        console.log(response);
        
        swal.fire('Nuevo Barbero', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
        this.router.navigate(['/login'])
        
      }
    );
  }


  ////////////////////////////////////////////////////////////////////
  saveCustomer(newCustomer: Customer){

    newCustomer = new Customer(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageCustomer);
    this.customerService.saveCustomer(newCustomer).subscribe(
      response => {

        console.log(response);
        swal.fire('Nuevo Cliente', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
        this.router.navigate(['/login'])
        
      }
    );
  }

}
