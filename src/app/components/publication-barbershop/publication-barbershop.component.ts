import { Usuario } from 'src/app/models/Usuario';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-publication-barbershop',
  templateUrl: './publication-barbershop.component.html',
  styleUrls: ['./publication-barbershop.component.css']
})
export class PublicationBarbershopComponent implements OnInit {
  listPublicity2:any=[];
  constructor(private route: ActivatedRoute, private BarbershopService:BarbershopService,private publicationServices:PublicityService, private authService :AuthServices) { }

  ngOnInit(): void {
    this.loader3();

    this.usuario = this.authService.usuario;

    this.id = this.route.snapshot.paramMap.get('id')
    
  }

  id : any;
  usuario: Usuario;
  barbershop : Barbershop;

  loader3():void{



    console.log("holi2")

    setTimeout(() => {

      this.BarbershopService.listpublicyid(this.id).subscribe(
        data =>{
          console.log(data)
          this.listPublicity2=data;
          console.log(this.listPublicity2.description);
          
        }
      )


      this.BarbershopService.getbarber(this.id).subscribe((response: any) =>{

        this.barbershop = response
      })
      
    }, 100);

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
