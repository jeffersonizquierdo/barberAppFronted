import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-publication-barbershop',
  templateUrl: './publication-barbershop.component.html',
  styleUrls: ['./publication-barbershop.component.css']
})
export class PublicationBarbershopComponent implements OnInit {
  listPublicity2:any=[];
  barbershop: any;
  constructor(private BarbershopService:BarbershopService,private publicationServices:PublicityService,private autservese:AuthServices) { }
  usuario:Usuario;
  variable:Boolean;
  ngOnInit(): void {
    this.loader3();
    
    this.usuario=this.autservese.usuario;
  }
  
  verboton(){
    if(this.usuario.id===this.barbershop.id){
      console.log(this.usuario.id)
      console.log(this.barbershop.id)
      this.variable=true;

    }else{
      console.log(this.usuario.id)
      console.log(this.barbershop.id)
      this.variable=false;
    }
  }
  

  loader3():void{
    console.log("holi2")
    this.BarbershopService.listpublicyid().subscribe(
      data =>{
        console.log(data)
        this.listPublicity2=data;
        console.log(this.listPublicity2.description);
        this.verboton()
      }
    )
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
