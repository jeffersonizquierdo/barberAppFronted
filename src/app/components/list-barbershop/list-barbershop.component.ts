import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

@Component({
  selector: 'app-list-barbershop',
  templateUrl: './list-barbershop.component.html',
  styleUrls: ['./list-barbershop.component.css']
})
export class ListBarbershopComponent implements OnInit {

  constructor(private sniper3:NgxSpinnerService,private BabrebrshopService:BarbershopService) { }

  nickname: string;
  description: string;
  barbershop:any=[];
  ngOnInit(): void {

    this.loader();
  }


  loader():void{
    this.BabrebrshopService.listBarber().subscribe(
      data =>{
        this.barbershop =data;
        console.log(this.barbershop.description);
        
      }
    )
  }

}
