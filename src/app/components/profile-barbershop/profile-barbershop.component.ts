import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-barbershop',
  templateUrl: './profile-barbershop.component.html',
  styleUrls: ['./profile-barbershop.component.css']
})
export class ProfileBarbershopComponent implements OnInit {

  constructor(private sniper3:NgxSpinnerService,private BabrebrshopService:BarbershopService, private authservices:AuthServices) { }
  barbershop :Barbershop;
  user:Usuario;
  ngOnInit(): void {
    this.user=this.authservices.usuario;
    this.loader();
    
  }
  editActive = true;

  cellphone:string;
  city:string;
  location:string;
  
  editTrue(){
    this.editActive = !this.editActive;
  }

  loader():void{
    this.BabrebrshopService.getbarber(this.user.id).subscribe(
      data =>{
        this.barbershop =data;
        console.log(this.barbershop.description);
        
      }
    )
  }

  updateBarbershop(){


    console.log(this.cellphone, this.city, this.location);
    

    if(this.cellphone != null) this.barbershop.cellphone = this.cellphone;
    else if (this.city != null) this.barbershop.city = this.city;
    else if(this.location != null) this.barbershop.location = this.location;  
    
    setTimeout(() => {
      this.BabrebrshopService.updateBarbershop(this.barbershop).subscribe((response: any) => {
      
        if(response){ Swal.fire("Hecho", "Has actualizado tu perfil", "success")}
      })
    }, 200);

  
  }



}
