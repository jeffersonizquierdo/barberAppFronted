import { Component, OnInit } from '@angular/core';
import { Barber } from 'src/app/models/Barber';

@Component({
  selector: 'app-modal-barber',
  templateUrl: './modal-barber.component.html',
  styleUrls: ['./modal-barber.component.css']
})
export class ModalBarberComponent implements OnInit {

  constructor() { }

  barber:Barber;


  ngOnInit(): void {
  }

}
