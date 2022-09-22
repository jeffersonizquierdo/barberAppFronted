import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Barbershop } from 'src/app/models/barbershop';
import { Booking } from 'src/app/models/Booking';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { BookingService } from 'src/app/services/booking/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-customer',
  templateUrl: './booking-customer.component.html',
  styleUrls: ['./booking-customer.component.css']
})
export class BookingCustomerComponent implements OnInit {
//variables de las reservas pendientes
  Bookings:any=[];
  BookingsIncomplete:any=[];
  barbershops: any=[];

  //variables de las reservas completas
  Bookingscomplete:any=[];
  Bookingscomplete2:any[];
  barbershopsComplete: any=[];
 
  
  // variables reservas canceladas
  Bookingscancelled:any[];
  Bookingscancelled2:any=[];
  barbershopscancelled:any=[];
  usuario:Usuario;


  //puntajes
  scoreBarbershop:any;
  scoreBarber:any;
  scorebro:any
  scorebria:any
  
  
  
  noCitas="";
  constructor(private snniperMensaje: NgxSpinnerService, private serviceBarbershop: BarbershopService, private serviceBarber: BarberService, private auhtService: AuthServices,private serviceBooking: BookingService) { }

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.loaderBookingMessages();
    this.loaderBookingcompleted();
    this. loaderBookingCanceled();
  }

  loaderBookingMessages(){
    this.serviceBooking.listBooking().subscribe((response:any)=>{
      this.Bookings=response;
      setTimeout(() => {
        this.Bookings.map(e=>{
          if(e.customer.id==this.usuario.id && e.completed == false){
            if(e.cancelled == true){
              console.log("cancelada");
            }else{
              this.BookingsIncomplete.push(e);  
            }
          }
        })
      },100);
      setTimeout(() => {
        this.BookingsIncomplete.map(e=>{
          this.serviceBarbershop.getbarber(e.barbershop).subscribe((data) => {
            this.barbershops.push(data);
          });
        })
      }, 600);
    })
  }

  loaderBookingcompleted(){
    this.serviceBooking.listBooking().subscribe((response:any)=>{
      this.Bookingscomplete2=response;
        this.Bookingscomplete2.map(e=>{
          if(e.customer.id==this.usuario.id){
            if(e.completed == true){
              this.Bookingscomplete.push(e);
            }
            }
        })
      setTimeout(() => {
        this.Bookingscomplete2.map(e=>{
          this.serviceBarbershop.getbarber(e.barbershop).subscribe((data) => {
            this.barbershopsComplete.push(data);
          });
        })
      }, 500);
    })
  }
  loaderBookingCanceled(){
    this.serviceBooking.listBooking().subscribe((response:any)=>{
      this.Bookingscancelled=response;
        this.Bookingscancelled.map(e=>{
          if(e.cancelled == true) this.Bookingscancelled2.push(e);
          console.log(this.Bookingscancelled2);
        })
      setTimeout(() => {
        this.Bookingscancelled2.map(e=>{
          this.serviceBarbershop.getbarber(e.barbershop).subscribe((data) => {
            console.log(data);
            this.barbershopscancelled.push(data);
          });
        })
      }, 500);
    })
  }

  score(bookings:Booking, barbershop:Barbershop){
    bookings.barber.qualification= bookings.barber.qualification +this.scoreBarber;
    this.serviceBarber.updateBarber(bookings.barber).subscribe((data:any)=>{
      console.log("actualizaco")
      console.log(data); 
      barbershop.qualification=barbershop.qualification+this.scoreBarbershop;
      this.serviceBarbershop.updateBarbershop(barbershop).subscribe((response:any)=>{
        console.log(response);
        
        bookings.score = true;
        console.log(bookings.score);
        
        this.serviceBooking.updateBooking(bookings).subscribe(data=>{
          Swal.fire("Hecho", "Barberia y Barbero puntuados", "success");
        })
      })
    })
  }

  Cancel(id:Number){
    this.serviceBooking.deleteBooking(id).subscribe((response:any)=>{
      console.log(response);
      Swal.fire("Hecho", "Reserve cancelada", "success");
      
    })
  }
}