import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-profile-barber',
  templateUrl: './profile-barber.component.html',
  styleUrls: ['./profile-barber.component.css']
})
export class ProfileBarberComponent implements OnInit {
  barbers: Barber;
  user:Usuario;
  constructor(private Barber:BarberService, private authservices:AuthServices) { }

  ngOnInit(): void {
    this.user=this.authservices.usuario;
    this.loader6();
  }

  loader6():void{
    this.Barber.getbarber(this.user.id).subscribe(
      data =>{
        this.barbers =data;
        console.log(this.barbers.description);
        
      }
    )
  }


}
