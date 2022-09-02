import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-list-all-barber',
  templateUrl: './list-all-barber.component.html',
  styleUrls: ['./list-all-barber.component.css']
})
export class ListAllBarberComponent implements OnInit {

  barbers:any=[];
  constructor(private BarberService:BarberService) { }

  ngOnInit(): void {
    this.loaderBarber();
  }

  loaderBarber():void{
    this.BarberService.listBarber().subscribe(
      data =>{
        this.barbers = data;
        console.log(this.barbers);
        
      }
    )
  }

}
