import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBarbershopComponent } from 'src/app/modals/modal-barbershop/modal-barbershop.component';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Barbershop } from 'src/app/models/barbershop';
import { Linkear } from 'src/app/models/linkear';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { LinkearService } from 'src/app/services/linkear/linkear.service';

@Component({
  selector: 'app-list-all-barber',
  templateUrl: './list-all-barber.component.html',
  styleUrls: ['./list-all-barber.component.css']
})
export class ListAllBarberComponent implements OnInit {

  barbers:any=[];
  constructor(private BarberService:BarberService, private auhtService: AuthServices, private serviceBarbershop:BarbershopService,private modalService:NgbModal,private serveceLinkear:LinkearService) { }
  usuario:Usuario;
  usuarioConsult:Usuario;
  barbershop:Barbershop;
  bonding:Linkear;
  barbero:Barber;

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
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

  linkear(id_barber:Number){
    this.barbershop=new Barbershop();
    this.serviceBarbershop.getbarber(this.usuario.id).subscribe((response:any)=>{
      this.barbershop=response;
      if(this.barbershop==null){
        this.abrirModal();
      }else{
        this.bonding= new Linkear();
        this.bonding.barbershop=this.barbershop
        this.bonding.acceptance=false;
        this.barbero=new Barber();
        this.BarberService.getbarber(id_barber).subscribe((response:any)=>{
          this.barbero=response;
          this.bonding.barber=this.barbero;
        })
      }
    })
    this.serveceLinkear.saveLinkear(this.bonding).subscribe(response=>{
      console.log(response);
    })
  }

  abrirModal(){
    this.modalService.open(ModalBarbershopComponent);
}

}
