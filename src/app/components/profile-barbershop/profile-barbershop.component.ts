import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-barbershop',
  templateUrl: './profile-barbershop.component.html',
  styleUrls: ['./profile-barbershop.component.css']
})
export class ProfileBarbershopComponent implements OnInit {


  editActive = true;
  cellphone:string;
  city:string;
  location:string;
  barbershop :Barbershop;
  user:Usuario;
  usuario:Usuario;

  constructor(private sniper3:NgxSpinnerService,private barberService:BarbershopService, private authservices:AuthServices, private usuarioService:UsuarioService) { }


  ngOnInit(): void {
    this.user=this.authservices.usuario;
    this.loader();
    this.getUser();    
  }


  
  editTrue(){
    this.editActive = !this.editActive;
  }

  getUser(){

    setTimeout(() => {
      this.usuarioService.getUser(this.barbershop.id).subscribe((response: any)=>{
        this.usuario = response;
      })
    }, 500);
  }

  loader():void{
    this.barberService.getbarber(this.user.id).subscribe(
      data =>{
        this.barbershop =data;        
      }
    )
  }

  updateBarbershop(){
    this.barberService.updateBarbershop(this.barbershop).subscribe((response: any) => {

      if(response){

        this.usuario.city = this.barbershop.city;
        this.usuario.cellphone = this.barbershop.cellphone;
    
        this.usuarioService.updateUsuario(this.usuario).subscribe((data : any) => {
          Swal.fire("Hecho", "Has actualizado tu perfil", "success")
        })
       
        this.editTrue()
      }
    })
  }



}
