import { Component, OnInit } from '@angular/core';
import { Barbershop } from 'src/app/models/barbershop';

@Component({
  selector: 'app-modal-barbershop',
  templateUrl: './modal-barbershop.component.html',
  styleUrls: ['./modal-barbershop.component.css']
})
export class ModalBarbershopComponent implements OnInit {

  barbershop: Barbershop;
  constructor() { }

  ngOnInit(): void {
  }

}
