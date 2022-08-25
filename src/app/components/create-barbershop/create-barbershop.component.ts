import { Usuario } from 'src/app/models/Usuario';
import { Barbershop } from 'src/app/models/barbershop';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { AuthServices } from 'src/app/models/AuthServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-barbershop',
  templateUrl: './create-barbershop.component.html',
  styleUrls: ['./create-barbershop.component.css']
})
export class CreateBarbershopComponent implements OnInit {

  constructor(private auhtService: AuthServices, private barbershopService: BarbershopService) { }

  ngOnInit(): void {
  }







}
