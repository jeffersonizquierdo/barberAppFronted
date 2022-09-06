import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

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

  loader():void{
    this.BabrebrshopService.getbarber(this.user.id).subscribe(
      data =>{
        this.barbershop =data;
        console.log(this.barbershop.description);
        
      }
    )
  }



}
