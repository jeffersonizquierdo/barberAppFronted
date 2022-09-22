
import { Barbershop } from './../../models/barbershop';
import { BarbershopService } from './../../services/barbershop/barbershop.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usuario } from 'src/app/models/Usuario';
import { ModalBarbershopComponent } from 'src/app/modals/modal-barbershop/modal-barbershop.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-barbershop',
  templateUrl: './home-barbershop.component.html',
  styleUrls: ['./home-barbershop.component.css']
})
export class HomeBarbershopComponent implements OnInit {

  constructor(private auhtService: AuthServices, private barbershopService: BarbershopService, private modalService:NgbModal) { }

  usuario:Usuario;
  barbershop: Barbershop;

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.abrirModal();    
  }

  abrirModal(){
    this.barbershopService.getbarber(this.usuario.id).subscribe((data: any )=>{
      this.barbershop=data;
      console.log(data);

    })
    setTimeout(() => {
      if(this.barbershop == null){
        this.modalService.open(ModalBarbershopComponent);
      };
    }, 1000);


  }




  // validateBarbershop():Boolean{

  //   this.usuario = this.auhtService.usuario;

  //   this.barbershopService.getbarber(this.usuario.id).subscribe(

  //     data => {

  //       this.barbershop = data;
  //     }
  //   )


  //   if (this.barbershop != null){

  //     this.modalService.closeModal();
  //     return true;


  //   } else {

  //     this.modalService.showModal();

  //     return false;
  //   }

  // }



}
