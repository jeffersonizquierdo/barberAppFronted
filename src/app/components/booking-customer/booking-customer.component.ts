import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { BookingService } from 'src/app/services/booking/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-customer',
  templateUrl: './booking-customer.component.html',
  styleUrls: ['./booking-customer.component.css']
})
export class BookingCustomerComponent implements OnInit {

  Bookings:any=[];
  BookingsIncomplete:any=[];
  Bookingscomplete:any=[];
  usuario:Usuario;
  barbershops: any=[];
  barbershopsComplete: any=[];
  constructor(private snniperMensaje: NgxSpinnerService, private serviceBarbershop: BarbershopService, private auhtService: AuthServices,private serviceBooking: BookingService) { }

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.loaderBookingMessages();
  }

  loaderBookingMessages(){
    this.serviceBooking.listBooking().subscribe((response:any)=>{
      this.Bookings=response;
      console.log(this.Bookings);
      setTimeout(() => {
        this.Bookings.map(e=>{
          if(e.customer.id==this.usuario.id && e.completed == false){
            this.BookingsIncomplete.push(e);
          }
        })
      },300);
      setTimeout(() => {
        this.BookingsIncomplete.map(e=>{
          this.serviceBarbershop.getbarber(e.barbershop).subscribe((data) => {
            this.barbershops = data;
          });
        })
      }, 500);
    })
  }

  loaderBookingcompleted(){
        this.Bookings.map(e=>{
          if(e.customer.id==this.usuario.id && e.completed == true){
            this.Bookingscomplete.push(e);
          }
        })
      setTimeout(() => {
        this.Bookingscomplete.map(e=>{
          this.serviceBarbershop.getbarber(e.barbershop).subscribe((data) => {
            this.barbershopsComplete = data;
          });
        })
      }, 500);
  }



  Cancel(id:Number){
    this.serviceBooking.deleteBooking(id).subscribe((response:any)=>{
      console.log(response);
      Swal.fire("Hecho", "Reserve cancelada", "success");
      
    })
  }
}
