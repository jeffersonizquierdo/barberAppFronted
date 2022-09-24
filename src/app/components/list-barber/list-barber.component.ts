import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Barber } from 'src/app/models/Barber';
import { Linkear } from 'src/app/models/linkear';
import { BarberService } from 'src/app/services/barber/barber.service';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { LinkearService } from 'src/app/services/linkear/linkear.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-barber',
  templateUrl: './list-barber.component.html',
  styleUrls: ['./list-barber.component.css']
})
export class ListBarberComponent implements OnInit {
  
  barber:any=[];
  constructor( private spinner4:NgxSpinnerService,private barbershopService:BarbershopService,private serviceBarber:BarberService,private serviceLinkear:LinkearService) { }

  Linkers:any=[];
  Linker:Linkear;

  ngOnInit(): void {
    this.loaderBarber();
    console.log(this.barber.length);
    
  }

  loaderBarber():void{
    this.barbershopService.listBarber().subscribe(
      data =>{
        this.barber = data;
        console.log(this.barber);
        
      }
    )
  }

  unlink(barber:Barber){
    this.serviceLinkear.listLinkear().subscribe((response:any)=>{
      this.Linkers=response;
      console.log(this.Linkers);
      this.Linkers.map(e=>{
        if(e.barber.id==barber.id && barber.barbershop.id == e.barbershop.id){
          console.log(e);
          this.Linker=e;
          this.serviceLinkear.deleteLinker(this.Linker.id).subscribe((response:any)=>{
            console.log(response);
            barber.barbershop=null;
            this.serviceBarber.updateBarber(barber).subscribe((response:any)=>{
              console.log(response);
              Swal.fire("Hecho", "Barbero desvinculado", "success");
              setTimeout(() => {
                window.location.reload()
              },800);
              
            })
          })         
        }else{
          Swal.fire("Denegado", "No se pudo realizar la acción", "error");
        }
      })
    })
  }

}
