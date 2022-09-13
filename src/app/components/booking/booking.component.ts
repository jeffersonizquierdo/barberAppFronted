import Swal  from 'sweetalert2';
import { BarbershopService } from './../../services/barbershop/barbershop.service';
import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Barbershop } from '../../models/barbershop';
import { Barber } from '../../models/Barber';
import { Booking } from 'src/app/models/Booking';
import { Usuario } from 'src/app/models/Usuario';
import { AuthServices } from 'src/app/models/AuthServices';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/Customer';
import { BookingService } from 'src/app/services/booking/booking.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  week:any= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

  monthSelect:any= []
  dateSelect: any;
  date:any;
  barbers:any=[];
  dateDb:any;
  idBarbershop: number;
  barbershop: Barbershop;
  barber:Barber;
  booking:Booking;
  usuario:Usuario;
  customer:Customer;
  listReservation:any;
  


  

  constructor(private serviceBarbershop:BarbershopService, private spinnerReservation: NgxSpinnerService,private route: ActivatedRoute, private authService:AuthServices, private serviceCustomer:CustomerService, private serviceBooking:BookingService ) { }



  ngOnInit(): void {
    this.reserve=null
    this.booking=new Booking();
    this.booking.completed=false;
    this.usuario=this.authService.usuario;
    this.getCustomer()
    this.idBarbershop =  parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.idBarbershop);
    this.loaderListBooking();
    this.getDaysFromDate(10,2022)
    this.loaderBarber()
  }

  //customer
  getCustomer(){
    this.serviceCustomer.getCustomer(this.usuario.id).subscribe((response:any)=>{
      this.customer=response;
      console.log("traje el cliente");
      console.log(this.customer);
      this.booking.customer=this.customer;

    })
  }

  // CALENDARIO
  getDaysFromDate(month, year){

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays =  Math.round(diffDays)

    const arrayDays = Object.keys([ ...Array(numberDays)]).map((a: any) => {

      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`)
      return{
        name: dayObject.format('dddd'),
        value: a,
        indexWeek: dayObject.isoWeekday()
      }
    })

    this.monthSelect = arrayDays;

  }

  changeMonth(flag){

    if(flag < 0){
      const nextDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY")) 
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY")) 
    }


  }

  clickDay(day?){

    console.log(this.barber);
    
    if(this.photo != null) {
  
      const monthYear = this.dateSelect.format('YYYY-MM');
      const parse = `${monthYear}-${day.value}`;
      const objectDay = moment(parse)
      console.log(parse);
      this.date = parse
      console.log(objectDay);

    } else {
      Swal.fire("informacion", "Seleciona un barbero primero", "info")  

    }

    this.error = null;

  }
    // horas
    hours:any=[
      {hour : 9, minutes: 0},

      {hour : 10, minutes: 0},

      {hour : 11, minutes: 0},

      {hour : 13, minutes: 0},

      {hour : 14, minutes: 0},
   
      {hour : 15, minutes: 0},
  
      {hour : 16, minutes: 0},
     
      {hour : 17, minutes: 0},
    
      {hour : 18, minutes: 0},
    
      {hour : 19, minutes: 0},]
  
      mesof:number;
      hourSelect:any;
      minutesSelect:any;
      error: string;
  
      captureTime(index:number){

      if(this.date == null){

        Swal.fire("informacion", "Selecionar una fecha primero", "info")
      } else{

        this.mesof = (this.date.slice(5,7)) - 2 
        
        this.dateDb = new Date(this.date.slice(0,4), this.mesof , this.date.slice(8,10),this.hours[index].hour, this.hours[index].minutes);
        this.hourSelect = this.dateDb.getHours()
        this.minutesSelect = this.dateDb.getMinutes();

        this.booking.reservationDate=this.dateDb
        console.log(this.booking.reservationDate)

      }

  
      }
      //barberos
  
      loaderBarber():void{
        this.serviceBarbershop.getbarber(this.idBarbershop).subscribe(
          data =>{
            this.barbershop = data;
            this.booking.barbershop=this.barbershop.id;
            this.barbers = data.listBarbers;            
          }
        )
      }
      horacita:any;
      horareserva:any;
      save=false;
      save2=false;
      reserve:Number;
      // Booking
      
      saveBooking(){
        this.spinnerReservation.show();
        if (this.listReservation.length === 0){
          this.saveBookingBD();
          this.loaderListBooking();
          this.empty();
        }else{
          this.listReservation.map(e=>{
            if(this.booking && this.booking.barber){

              if(e.customer.id===this.customer.id && e.barbershop===this.barbershop.id){
                this.spinnerReservation.hide();
                this.save=false;
                this.save2=true;
              }else{
                
                if(e.barber.id==this.booking.barber.id){
                  this.horacita=new Date(e.reservationDate);
                  this.horareserva=new Date(this.booking.reservationDate);
  
                  if(this.reserve!=0){
                    this.reserve=this.compare(this.horareserva,this.horacita);
                  }
                  
  
                  console.log("con");
                  console.log(this.reserve);
  
                  if(this.reserve===0){
                    Swal.fire("informacion", "Esta Hora ya esta reservada", "info")
                    this.spinnerReservation.hide();
                    this.save=false;
                    this.empty();
                  }else{
                    this.save=true;
                    this.spinnerReservation.hide();
                    this.save2=true;
                  }
                }else{
                  this.save=true;
                  this.spinnerReservation.hide();
                }
              }
            }
          })
          if(this.save==true){
            this.saveBookingBD();
            this.loaderListBooking();
          }else if(this.save2==true){
            Swal.fire("informacion", "Ya tienes una cita en esta barberia", "info")
          }
        }
        
      }
      loaderListBooking(){
        this.serviceBooking.listBooking().subscribe((data:any)=>{
          this.listReservation=data;
          console.log(this.listReservation);
          
        })
      }
      compare(dateTimeA, dateTimeB) {
        var momentA = moment(dateTimeA);
        var momentB = moment(dateTimeB);
        if (momentA > momentB) return 1;
        else if (momentA < momentB) return -1;
        else return 0;
    }
      saveBookingBD(){
        this.serviceBooking.saveBooking(this.booking).subscribe((response:any)=>{
          console.log("melo");
          console.log(response);
          Swal.fire("Hecho", "Tu cita esta programada ", "success")
          this.spinnerReservation.hide();
          this.loaderListBooking();
          this.empty();
        });
      }
      
    // logica de creacion de reserva
    name : string;
    photo: string;

    selectBarber(barber:Barber){      
      this.name = barber.nickname;
      this.photo = barber.photo;
      this.booking.barber=barber;
      
        
    }
    empty(){
      
      this.name=null;
      this.photo=null;
      this.mesof=null;
      this.hourSelect=null;
      this.minutesSelect=null;
      this.booking=new Booking();
      // this.booking.barber = new Barber()
      this.reserve=null;
      this.date=null
      this.getCustomer()
      this.loaderBarber()
      this.booking.completed=false;
      this.save=false;
      this.save2=false;
    }


}
