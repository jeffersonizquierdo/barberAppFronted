import { Booking } from './../../models/Booking';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Barbershop } from 'src/app/models/barbershop';
import { Linkear } from 'src/app/models/linkear';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { LinkearService } from 'src/app/services/linkear/linkear.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bonding-messages',
  templateUrl: './bonding-messages.component.html',
  styleUrls: ['./bonding-messages.component.css']
})
export class BondingMessagesComponent implements OnInit {

  constructor( private auhtService: AuthServices,private serviceLinkear:LinkearService,private BarbershopService:BarbershopService, 
    private serviceBarber:BarberService, private snipper: NgxSpinnerService) { }
  Linkers:any=[];
  listLinkear:any=[];
  barbershops:Barbershop[]=[];
  barbershop:Barbershop;
  usuario:Usuario;
  barber:Barber;
  bonding:Linkear;
  acceptance:Boolean;
  booking: Booking;


  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.loaderBondingMessages();
  }

  loaderBondingMessages(){
    this.serviceLinkear.listLinkear().subscribe((response:any)=>{
      this.Linkers=response;
      console.log(this.Linkers);
      setTimeout(() => {
        this.Linkers.map(e=>{
          if(e.barber.id==this.usuario.id && e.acceptance == false){
            this.listLinkear.push(e);
            console.log(this.listLinkear)
          }
        })
      },200);
      setTimeout(() => {
        this.barbershop=new Barbershop();
        this.listLinkear.map(e=>{
          this.BarbershopService.getbarber(e.barbershop.id).subscribe((response:any)=>{
            this.barbershop=response;
            this.barbershops.push(this.barbershop);
          })
        })
      }, 300);
    })
  }

  linkUp(idbarbershop:Number){
 
    this.listLinkear.every(e=>{
      return this.acceptance=e.acceptance==true
    })

    setTimeout(() => {

      this.snipper.show();
      if(this.acceptance==false){
        this.listLinkear.every(e=>{
              if(e.barbershop.id==idbarbershop){
                e.acceptance=true;
                this.serviceLinkear.updateLinkear(e).subscribe((response:any)=>{
                  setTimeout(() => {
                    this.serviceBarber.getbarber(e.barber.id).subscribe((response:any)=>{
                      this.barber=response;
                      this.barber.barbershop=e.barbershop;
                      console.log(e.barbershop);
                      this.serviceBarber.updateBarber(this.barber).subscribe((response:any)=>{
                        this.snipper.hide();
                        Swal.fire('Hecho',`Te vinculaste a la barberia` , 'success');
                        setTimeout(() => {
                          window.location.reload();
                        }, 1000);
                        return true;
                      })
                    })
                  }, 500);
                });
              }
            })
          }else{
            Swal.fire('Denegado',`Ya te vinculaste a una barberia desvinculate antes o adquiere una version premium ` , 'info');
          }
      
    }, 500);


    }


}


