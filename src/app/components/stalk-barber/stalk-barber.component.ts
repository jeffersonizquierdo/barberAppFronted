import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barber } from 'src/app/models/Barber';
import { BarberService } from 'src/app/services/barber/barber.service';
@Component({
  selector: 'app-stalk-barber',
  templateUrl: './stalk-barber.component.html',
  styleUrls: ['./stalk-barber.component.css']
})
export class StalkBarberComponent implements OnInit {

  constructor(private route: ActivatedRoute,private barberservices:BarberService) { }

  ngOnInit(): void {
    this.idBarber =  this.route.snapshot.paramMap.get('id');
    this.getbarber()
  }

  idBarber: any;
  barber:Barber;

  
  getbarber(){
    this.barberservices.getbarber(this.idBarber).subscribe((resorse:any)=>{
      this.barber=resorse
    })
  }

}
