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

  constructor(private barbershopService:BarbershopService,private publicationServices:PublicityService,private autservese:AuthServices, private route: ActivatedRoute) { }

  variable:Boolean;
  ngOnInit(): void {
    this.loader3();
    this.idBarbershop =  this.route.snapshot.paramMap.get('id');
    this.usuario=this.autservese.usuario;
  }


  usuario: Usuario;
  barbershop : Barbershop;
  idBarbershop : any;

  loader3():void{


    setTimeout(() => {

      this.barbershopService.getbarber(this.idBarbershop).subscribe((response: any) =>{

        this.barbershop = response

        this.barbershopService.listpublicyid(this.barbershop.id).subscribe(
        
          (data: any) =>{
            console.log(data)
            this.listPublicity2=data;
            console.log(this.listPublicity2.description);

            console.log("iddddd "  + this.barbershop.id);
            console.log(this.barbershop);
            
          }
        )
      })

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
