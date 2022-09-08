import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarbershopService } from '../../services/barbershop/barbershop.service';
import { Barbershop } from '../../models/barbershop';

@Component({
  selector: 'app-stalk-barbershop',
  templateUrl: './stalk-barbershop.component.html',
  styleUrls: ['./stalk-barbershop.component.css']
})
export class StalkBarbershopComponent implements OnInit {

  constructor(private route: ActivatedRoute,private serviceBarbershop:BarbershopService) { }

  ngOnInit(): void {

    this.idBarbershop =  this.route.snapshot.paramMap.get('id');
    console.log(this.idBarbershop);
    this.consullBarbershop();
  }

  idBarbershop: any;
  barbershop:any;

  consullBarbershop(){
    this.serviceBarbershop.getbarber(this.idBarbershop).subscribe((resorse:any)=>{
      this.barbershop=resorse
    })
  }

}
