import { BookingService } from './../../services/booking/booking.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'
import { AuthServices } from 'src/app/models/AuthServices';
import { Usuario } from 'src/app/models/Usuario';
import { Barbershop } from 'src/app/models/barbershop';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-bookings-barbershop',
  templateUrl: './bookings-barbershop.component.html',
  styleUrls: ['./bookings-barbershop.component.css']
})
export class BookingsBarbershopComponent implements OnInit {


  public setDate: Date =  new Date();
  public setView : View[] = ['Day', "Week", 'Month'];


  usuario: Usuario;
  barbershop: Barbershop;
  bookings:Booking[]=[];
  bookingsBarbershop:Booking[]=[];
  eventSettings: EventSettingsModel;
  data: any;
  fecha: Date;
  fechafin:any;
  fechafinal:any;
  showDates:any[]=[];


  constructor(private authService : AuthServices, private barbershopService: BarbershopService, 
    private serviceBooking : BookingService) { }


  ngOnInit(): void {

    this.usuario = this.authService.usuario;
    this.getBarbershop();
    this. getBookings();
  }


  getBarbershop(){

    this.barbershopService.getbarber(this.usuario.id).subscribe((response : any) => {
       this.barbershop = response
    })
  }

  anio: any
  mes: any;
  dia: any;
  horas:any;
  minutos: any;


  getBookings(){

    this.serviceBooking.listBooking().subscribe((response : any) => {

      this.bookings = response
      
    })

    setTimeout(() => {

      this.bookings.map(e => {

        if(this.barbershop.id = e.barbershop){
          this.bookingsBarbershop.push(e);          
        }
      })


      this.bookingsBarbershop.map(e =>{

        this.fecha = new Date(e.reservationDate);

        console.log("fecha");
        
        this.fechafin = this.fecha.getTime()


        

        this.data = 
          {Id: e.id,
            Subject: e.barber.nickname,
            StartTime: new Date(this.fecha),
            EndTime: new Date(this.fechafin + (55 * 60000))}
        

        this.showDates.push(this.data)
      })

      console.log(this.showDates);
      
      this.eventSettings = { dataSource: this.showDates};
    }, 1000);

  }
}
