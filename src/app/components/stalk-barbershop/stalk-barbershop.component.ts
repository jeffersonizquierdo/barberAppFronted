import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarbershopService } from '../../services/barbershop/barbershop.service';
import { Barbershop } from '../../models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { AuthServices } from 'src/app/models/AuthServices';

@Component({
  selector: 'app-stalk-barbershop',
  templateUrl: './stalk-barbershop.component.html',
  styleUrls: ['./stalk-barbershop.component.css']
})
export class StalkBarbershopComponent implements OnInit {

  constructor(private route: ActivatedRoute,private serviceBarbershop:BarbershopService, private authService: AuthServices, private barbershopService:BarbershopService) { }

  ngOnInit(): void {

    this.idBarbershop =  this.route.snapshot.paramMap.get('id');
    this.usuario = this.authService.usuario;
    console.log(this.idBarbershop);
    this.consullBarbershop();
    this.publications()
  }

  idBarbershop: any;
  barbershop:any;
  usuario: Usuario;
  listPublicity2:any=[];

  consullBarbershop(){
    this.serviceBarbershop.getbarber(this.idBarbershop).subscribe((resorse:any)=>{
      this.barbershop=resorse
      console.log(resorse);
      
    })
  }

  publications(){

    this.barbershopService.listpublicyid(this.idBarbershop).subscribe((data: any) =>{
      this.listPublicity2=data;

      
    })

  }

}
