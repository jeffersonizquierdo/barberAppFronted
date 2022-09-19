import { Usuario } from './../../models/Usuario';
import { AuthServices } from './../../models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-publication-barbershop',
  templateUrl: './publication-barbershop.component.html',
  styleUrls: ['./publication-barbershop.component.css']
})
export class PublicationBarbershopComponent implements OnInit {
  listPublicity2:any=[];

  @Input() idBarberia: number;

  constructor(private BarbershopService:BarbershopService,private publicationServices:PublicityService,private autservese:AuthServices) { }

  variable:Boolean;
  ngOnInit(): void {
    this.loader3();
    
    this.usuario=this.autservese.usuario;
  }
  
 


  usuario: Usuario;
  barbershop : Barbershop;

  loader3():void{



    console.log("holi2")

    setTimeout(() => {


     
      

      this.BarbershopService.getbarber(this.idBarberia).subscribe((response: any) =>{

        this.barbershop = response
      })

      console.log("iddddd "  + this.idBarberia);

      this.BarbershopService.listpublicyid(this.idBarberia).subscribe(
        
        (data: any) =>{
          console.log(data)
          this.listPublicity2=data;
          console.log(this.listPublicity2.description);
          
        }
      )
      
    }, 500);

  }
  delete  (id:Number):void{

    // Swal.fire({
    //   title: 'Desea elimnar esta promocion',
    //   icon: 'question',
    //   iconHtml: '?',
    //   confirmButtonText: 'si',
    //   cancelButtonText: 'no',
    //   showCancelButton: true,
    //   showCloseButton: true
    // })

    this.publicationServices.deleteplubication(id).subscribe(
      data=>{
        if(data){
          //this.loaderImage()
        }
      },err=>{
        alert(err)
        console.log(err)
      }
    )
  }

}
