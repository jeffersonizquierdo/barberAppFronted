import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-time',
  templateUrl: './booking-time.component.html',
  styleUrls: ['./booking-time.component.css']
})
export class BookingTimeComponent implements OnInit {

  constructor() { }
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
    {hour : 7, minutes: 30}
]
  ngOnInit(): void {
    
  }
  captureTime(index:number){
    var currentDateObj = new Date(2022,9,6,this.hours[index].hour, this.hours[index].minutes);
    console.log(this.hours[index]);
    console.log(currentDateObj);
  }
}
