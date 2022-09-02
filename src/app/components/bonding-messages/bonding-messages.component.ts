import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServices } from 'src/app/models/AuthServices';
import { Linkear } from 'src/app/models/linkear';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { LinkearService } from 'src/app/services/linkear/linkear.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-bonding-messages',
  templateUrl: './bonding-messages.component.html',
  styleUrls: ['./bonding-messages.component.css']
})
export class BondingMessagesComponent implements OnInit {

  constructor( private auhtService: AuthServices,private modalService:NgbModal,private serveceLinkear:LinkearService,private BabrebrshopService:BarbershopService) { }
  Linkers:any=[];
  listLinkear:any=[];
  Barbershops:any=[];
  usuario:Usuario;
  bonding:Linkear;

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.  loaderBondingMessages();
  }

  loaderBondingMessages(){
    this.serveceLinkear.listLinkear().subscribe((response:any)=>{
      this.Linkers=response;
    })
    setTimeout(() => {
      this.Linkers.map(e=>{
        if(e.Barber.id==this.usuario.id){
          this.listLinkear.append(e);
        }
      })
    },100);
    this.listLinkear.map(e=>{
      this.Barbershops=this.BabrebrshopService.getbarber(e.barbershop.id);
    })
  }
}
