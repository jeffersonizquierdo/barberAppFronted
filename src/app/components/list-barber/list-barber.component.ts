import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

@Component({
  selector: 'app-list-barber',
  templateUrl: './list-barber.component.html',
  styleUrls: ['./list-barber.component.css']
})
export class ListBarberComponent implements OnInit {
  
  barber:any=[];
  constructor( private spinner4:NgxSpinnerService,private BarberService:BarbershopService) { }

  ngOnInit(): void {
    this.loaderBarber();
  }

  loaderBarber():void{
    this.BarberService.listBarber().subscribe(
      data =>{
        this.barber = data;
        console.log(this.barber);
        
      }
    )
  }

}
