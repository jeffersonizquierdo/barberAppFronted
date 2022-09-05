import { Component, OnInit } from '@angular/core';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-profile-barber',
  templateUrl: './profile-barber.component.html',
  styleUrls: ['./profile-barber.component.css']
})
export class ProfileBarberComponent implements OnInit {
  barbers:any=[];
  constructor(private Barber:BarberService) { }

  ngOnInit(): void {
    this.loader6();
  }

  loader6():void{
    this.Barber.listBarber().subscribe(
      data =>{
        this.barbers =data;
        console.log(this.barbers.description);
        
      }
    )
  }

}
