import { Component, OnInit } from '@angular/core';
import * as moment  from 'moment';

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

  

  constructor() { }

 

  ngOnInit(): void {

    this.getDaysFromDate(9,2022)
  }


  getDaysFromDate(month, year){

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect  =startDate
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

    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`;
    const objectDay = moment(parse)
    console.log(parse);
    this.date = parse
    console.log(objectDay);

    
  }



}
