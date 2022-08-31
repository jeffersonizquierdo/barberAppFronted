import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBarberComponent } from 'src/app/modals/modal-barber/modal-barber.component';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';

@Component({
  selector: 'app-home-barber',
  templateUrl: './home-barber.component.html',
  styleUrls: ['./home-barber.component.css']
})
export class HomeBarberComponent implements OnInit {

  constructor(private auhtService: AuthServices, private barberService: BarberService, private modalService:NgbModal) { }

  usuario:Usuario;
  barber: Barber;

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.abrirModal();
  }

  abrirModal(){

    this.barberService.getbarber(this.usuario.id).subscribe(data=>{
      this.barber=data;
    })

    setTimeout(() => {

      if(this.barber==null){
        this.modalService.open(ModalBarberComponent);
      };
      
    }, 500);
  }




}
