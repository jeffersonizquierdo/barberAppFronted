import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data'

@Component({
  selector: 'app-calendar',
  // templateUrl: './calendar.component.html',
  template: '<ejs-schedule  [eventSettings]="eventObject" [selectedDate]="setDate"  [views]="setView"></ejs-schedule>',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Notas
  // IsBLok: para bloquear ese tiempo
  // IsReadonly: desabilita la opcion de editar y eliminar
  // Subject: tiulo de la cita


  private eventData: DataManager = new DataManager({

    url:"https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData",
    adaptor: new WebApiAdaptor,
    crossDomain: true

  });

  public setView : View[] = ['Day', "Week", 'Month'];
  public setDate: Date =  new Date(2022, 7, 5)
  // public eventObject: EventSettingsModel = {

    

  //   dataSource: this.eventData
    
  //   // [{// Subject: "Reserva",
  //     // StartTime: new Date (2022, 7, 30, 12, 0),
  //     // EndTime: new Date (2022, 7, 31, 16, 0),
  //     // IsReadonly: true,}]
  // }


  public eventObject: EventSettingsModel = {

    

    dataSource: [{
      Subject: "Reserva",
      StartTime: new Date (2022, 7, 30, 12, 0),
      EndTime: new Date (2022, 7, 30, 16, 0),
    }]
  }






}
