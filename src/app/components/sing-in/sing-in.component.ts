import  swal  from 'sweetalert2';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {


  contacForm: FormGroup;
  usuario: Usuario;
  
  constructor(private router: Router,private usuarioservice:UsuarioService ) {
    console.log("d")
    this.usuario = new Usuario()
  }

  ngOnInit(): void { 
    this.usuario = new Usuario()
  }
  

  login= new FormGroup({

    nickname: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    date: new FormControl("",[Validators.required]),
    city:  new FormControl("",[Validators.required]),
    cellphone: new FormControl("",[Validators.required]),
  })

  dataTypeUser (value : number){

    if (value == 1) this.usuario.typeUser = 1 

    else if (value == 2) this.usuario.typeUser = 2

    else if (value == 3) this.usuario.typeUser = 3
  
  }

  saveUser() {
    this.usuario.enabled = true;

    console.log(this.usuario);
    
    this.usuarioservice.saveUsuario(this.usuario).subscribe(
          response  => {
            console.log(response);
            swal.fire('Nuevo Usuario',`Hola ${this.usuario.nickname} te damos la bienvenida a BarberApp` , 'success')
          }
        );
  }

















  // // variables para mostrar campos en el dom
  // registrerBarbershop = false;
  // registrerBarber = false;
  // registrerCustomer = false;
  

  // // General Data
  // id:number;
  // email:string;
  // password: string;
  // nickname: string
  // city: string;
  // cellphone: string;
  // typeUser: Number;
  // photo:string;

  // // Barbershop Data
  // locationBarbershop:string;
  // descriptionBarbershop:string
  // idCatalogue:Number;

  // // Barber Data
  // ageBarber:Date;
  // descriptionBarber:string

  // // Customer Data
  // ageCustomer:Date;


  // //Objetos 
  // newBarbershop: Barbershop;
  // newCustomer: Customer;
  // newBarber:Barber;




  // ////////////////////////////////////////////////////////////////////
  // saveBarbershop(newBarbershop: Barbershop){

  //   newBarbershop = new Barbershop(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.descriptionBarbershop, this.locationBarbershop, 0);
  //   this.barbershopService.saveBarbeshop(newBarbershop).subscribe(
  //     response  => {
        
  //       console.log(response);
  //       swal.fire('Nuevo Barberias', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //     }
      
  //   );

    
  // }

  // ////////////////////////////////////////////////////////////////////
  // saveBarber(newBarber:Barber){

  //   newBarber = new Barber(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageBarber, this.descriptionBarber, 0)
  //   this.barberService.saveBarber(newBarber).subscribe(
  //     response =>{

  //       console.log(response);
        
  //       swal.fire('Nuevo Barbero', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //       this.router.navigate(['/login'])
        
  //     }
  //   );
  // }


  // ////////////////////////////////////////////////////////////////////
  // saveCustomer(newCustomer: Customer){

  //   newCustomer = new Customer(this.id, this.email, this.password, this.nickname, this.city, this.cellphone, this.typeUser, this.photo, this.ageCustomer);
  //   this.customerService.saveCustomer(newCustomer).subscribe(

  //     response =>{
  //       console.log(response);
  //       swal.fire('Nuevo Cliente', `Hola ${this.nickname} te damos la bienvenida a BarberApp` , 'success')
  //       this.router.navigate(['/login'])

  //     }

  //   );
  // }

}