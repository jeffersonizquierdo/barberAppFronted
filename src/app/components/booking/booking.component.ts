import Swal  from 'sweetalert2';
import { BarbershopService } from './../../services/barbershop/barbershop.service';
import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Barbershop } from '../../models/barbershop';
import { Barber } from '../../models/Barber';

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


  

  constructor(private serviceBarbershop:BarbershopService, private route: ActivatedRoute ) { }

 

  ngOnInit(): void {

    this.idBarbershop =  parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(this.idBarbershop);
    

    this.getDaysFromDate(9,2022)

    this.loaderBarber()
  }

  

  // CALENDARIO
  getDaysFromDate(month, year){

    const startDate = moment.utc(`${year}/${month + 1}/01`)
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
      const nextDate = this.dateSelect.clone().subtract(2, "month");
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
      {hour : 9, minutes: 30},
      {hour : 10, minutes: 0},
      {hour : 10, minutes: 30},
      {hour : 11, minutes: 0},
      {hour : 11, minutes: 30},
      {hour : 1, minutes: 0},
      {hour : 1, minutes: 30},
      {hour : 2, minutes: 0},
      {hour : 2, minutes: 30},
      {hour : 3, minutes: 0},
      {hour : 3, minutes: 30},
      {hour : 4, minutes: 0},
      {hour : 4, minutes: 30},
      {hour : 5, minutes: 0},
      {hour : 5, minutes: 30},
      {hour : 6, minutes: 0},
      {hour : 6, minutes: 30},
      {hour : 7, minutes: 0},
      {hour : 7, minutes: 30}]
  
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

      }
      



       
  
  
      }
  
  
  
      //barberos
  
      loaderBarber():void{
        this.serviceBarbershop.getbarber(this.idBarbershop).subscribe(
          data =>{
            this.barbershop = data;
            this.barbers = data.listBarbers
            console.log(this.barbers);
            
          }
        )
      }
    
      
  
      // Booking
  
      saveBOoking(){
  
  
  
      }


    // logica de creacion de reserva

    name : string;
    photo: string;

    selectBarber(barber:Barber){

      console.log(barber);
      
      this.name = barber.nickname;
      this.photo = barber.photo;
        
    }1

}
