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
  usuario:Usuario;
  barbershop: Barbershop;
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
        this.serviceBarbershop.getbarber(this.Bookings.barbershop).subscribe((data) => {
          this.barbershop = data;
        });
      }, 100);
      
      setTimeout(() => {
        this.Bookings.map(e=>{
          if(e.customer.id==this.usuario.id && e.completed == false){
            this.BookingsIncomplete.push(e);
            console.log(this.BookingsIncomplete);
          }
        })
      },300);
    })
  }

  Cancel(id:Number){
    this.serviceBooking.deleteBooking(id).subscribe((response:any)=>{
      console.log(response);
      Swal.fire("Hecho", "Reserve cancelada", "success");
      
    })
  }
 
}
