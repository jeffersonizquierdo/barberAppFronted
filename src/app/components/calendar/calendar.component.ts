import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calendar',
  // templateUrl: './calendar.component.html',
  template: '<ejs-schedule  [eventSettings]="eventObject"  [currentView]="setView"></ejs-schedule>',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public setView : View = "Week";
  public setDate: Date =  new Date(2022, 7,15)
  public eventObject: EventSettingsModel = {

    dataSource: [{
      
      Subject: "Reserva",
      StartTime: new Date (2022, 7, 30, 12, 0),
      EndTime: new Date (2022, 7, 31, 16, 0),
      IsReadonly: true
    }]
  }

}
