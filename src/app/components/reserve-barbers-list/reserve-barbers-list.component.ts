import { Component, OnInit } from '@angular/core';
import { Barber } from 'src/app/models/Barber';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';

@Component({
  selector: 'app-reserve-barbers-list',
  templateUrl: './reserve-barbers-list.component.html',
  styleUrls: ['./reserve-barbers-list.component.css']
})
export class ReserveBarbersListComponent implements OnInit {

  barbers:any=[];

  constructor(private serviceBarbershop:BarbershopService) { }

  ngOnInit(): void {
    this.loaderBarber();
  }
  loaderBarber():void{
    this.serviceBarbershop.listBarber().subscribe(
      data =>{
        this.barbers = data;
        console.log(this.barbers);
        
      }
    )
  }

  selectBarber(barberId:Number){

  }
}
