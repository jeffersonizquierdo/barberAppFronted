import { Component, OnInit } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  // templateUrl: './calendar.component.html',
  template: '<ejs-schedule [currentView]="setView"></ejs-schedule>',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public setView : View = "Month"; 

}
