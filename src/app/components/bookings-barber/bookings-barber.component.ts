import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel, WorkHoursModel } from '@syncfusion/ej2-angular-schedule';
import { Usuario } from '../../models/Usuario';
import { Barbershop } from '../../models/barbershop';
import { Booking } from '../../models/Booking';
import { BookingService } from '../../services/booking/booking.service';
import { BarberService } from '../../services/barber/barber.service';
import { AuthServices } from '../../models/AuthServices';
import { Barber } from '../../models/Barber';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookings-barber',
  //template: '<ejs-schedule float = "left"  width="50%" [eventSettings]="eventSettings" height="920px"> </ejs-schedule><app-list-bookingbarber></app-list-bookingbarber> ' ,
  templateUrl: './bookings-barber.component.html',
  styleUrls: ['./bookings-barber.component.css']
})
export class BookingsBarberComponent implements OnInit {


  usuario: Usuario;
  barber: Barber
  bookings:Booking[]=[];
  bookingsBarber:Booking[]=[];
  bookikingsBarberComplete: Booking[] = []
  eventSettings: EventSettingsModel;
  data: any;
  fecha: Date;
  fechafin:any;
  fechafinal:any;
  showDates:any[]=[];


  constructor(private serviceBooking : BookingService, private serviceBarber: BarberService, private authService: AuthServices, private bookingService: BookingService) { }

  ngOnInit(): void {

    this.usuario = this.authService.usuario;

    this.getBarber()
    this.getBookings()
  }


  public setDate: Date =  new Date();
  public setView : View[] = ['Day', "Week", 'Month'];


  getBarber(){

    this.serviceBarber.getbarber(this.usuario.id).subscribe((response : any) => {
       this.barber = response
    })
  }


  anio: any
  mes: any;
  dia: any;
  horas:any;
  minutos: any;


  getBookings(){

    this.serviceBooking.listBooking().subscribe((response : any) => {

      this.bookings = response;
      
    })

    setTimeout(() => {

      this.bookings.map(e => {

        if(this.barber.id == e.barber.id){
          this.bookingsBarber.push(e);  
          
          if(this.barber.id == e.barber.id && e.completed == false && e.cancelled == false){

            this.bookikingsBarberComplete.push(e)

          }
        }
      })


      this.bookingsBarber.map(e =>{

        this.fecha = new Date(e.reservationDate);

        console.log("fecha");
        
        this.fechafin = this.fecha.getTime()


        

        this.data = 
          {Id: e.id,
            Subject: "Cli:  "  + e.customer.nickname,
            StartTime: new Date(this.fecha),
            EndTime: new Date(this.fechafin + (55 * 60000))}
        

        this.showDates.push(this.data)
      })

      console.log(this.showDates);
      
      this.eventSettings = { dataSource: this.showDates};
    }, 1000);

  }


  completeBooking(booking:Booking){

    booking.completed = true;
    this.bookingService.updateBooking(booking).subscribe()
    Swal.fire("Cita completada" , `Se ha completado el corte de ${booking.customer.nickname} con exito`, "success")
  }



  cancelBooking(booking: Booking){

    booking.cancelled=true;
    this.bookingService.updateBooking(booking).subscribe()
    Swal.fire("Cita cancelada", `Se ha cancelado la reserva de ${booking.customer.nickname} con exito`, "success")


    setTimeout(() => {
      
      window.location.reload()
    }, 1500);


  }

}
