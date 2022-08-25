import { ModalBarbershopService } from './../../services/Modales/modal-barbershop.service';
import { Barbershop } from './../../models/barbershop';
import { BarbershopService } from './../../services/barbershop/barbershop.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-home-barbershop',
  templateUrl: './home-barbershop.component.html',
  styleUrls: ['./home-barbershop.component.css']
})
export class HomeBarbershopComponent implements OnInit {

  constructor(private auhtService: AuthServices,private modalService: ModalBarbershopService, private barbershopService: BarbershopService) { }

  ngOnInit(): void {

    this.validateBarbershop();
  }


  usuario:Usuario;
  usuarioConsilt: Usuario;
  barbershop: Barbershop;


  validateBarbershop():Boolean{

    this.usuario = this.auhtService.usuario;

    this.barbershopService.getbarber(this.usuario.id).subscribe(

      data => {

        this.barbershop = data;
      }
    )


    if (this.barbershop != null){

      this.modalService.closeModal();
      return true;


    } else {

      this.modalService.showModal();

      return false;
    }

  }

 


}
