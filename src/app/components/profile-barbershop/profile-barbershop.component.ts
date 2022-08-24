import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

@Component({
  selector: 'app-profile-barbershop',
  templateUrl: './profile-barbershop.component.html',
  styleUrls: ['./profile-barbershop.component.css']
})
export class ProfileBarbershopComponent implements OnInit {

  constructor(private sniper3:NgxSpinnerService,private BabrebrshopService:BarbershopService) { }
  barbershop:any=[];
  ngOnInit(): void {
    this.loader();
  }

  loader():void{
    this.BabrebrshopService.listBarbershop().subscribe(
      data =>{
        this.barbershop =data;
        console.log(this.barbershop.description);
        
      }
    )
  }



}
