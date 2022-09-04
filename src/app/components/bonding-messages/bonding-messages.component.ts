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

  constructor( private auhtService: AuthServices,private serveceLinkear:LinkearService,private BabrebrshopService:BarbershopService, private serviceBarber:BarberService) { }
  Linkers:any=[];
  listLinkear:any=[];
  barbershops:Barbershop[]=[];
  barbershop:Barbershop;
  usuario:Usuario;
  barber:Barber;
  bonding:Linkear;
  acceptance:Boolean;

  ngOnInit(): void {
    this.usuario=this.auhtService.usuario;
    this.loaderBondingMessages();
  }

  loaderBondingMessages(){
    this.serveceLinkear.listLinkear().subscribe((response:any)=>{
      this.Linkers=response;
      console.log(this.Linkers);
      setTimeout(() => {
        this.Linkers.map(e=>{
          if(e.barber.id==this.usuario.id){
            this.listLinkear.push(e);
            console.log(this.listLinkear)
          }
        })
      },200);
      setTimeout(() => {
        this.barbershop=new Barbershop();
        this.listLinkear.map(e=>{
          this.BabrebrshopService.getbarber(e.barbershop.id).subscribe((response:any)=>{
            this.barbershop=response;
            this.barbershops.push(this.barbershop);
          })
        })
      }, 300);
    })
  }

  linkUp(idbarbershop:Number){
    console.log("w")
    this.listLinkear.every(e=>{
      return this.acceptance=e.acceptance==true
    })
    if(this.acceptance==false){
      console.log(this.acceptance)
      this.listLinkear.every(e=>{
            if(e.barbershop.id==idbarbershop){
              e.acceptance=true;
              this.serveceLinkear.updateLinkear(e).subscribe((response:any)=>{
                console.log(response)
                setTimeout(() => {
                  this.serviceBarber.getbarber(e.barber.id).subscribe((response:any)=>{
                    this.barber=response;
                    this.barber.barbershop=e.barbershop;
                    console.log(e.barbershop);
                    console.log("barup");
                    console.log(this.barber);
                    this.serviceBarber.updateBarber(this.barber).subscribe((response:any)=>{
                      console.log("todo bien")
                      console.log(response);
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
    }


}


