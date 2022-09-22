import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalBarbershopComponent } from 'src/app/modals/modal-barbershop/modal-barbershop.component';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Publicity } from 'src/app/models/Publicity';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-load-publicity',
  templateUrl: './load-publicity.component.html',
  styleUrls: ['./load-publicity.component.css']
})
export class LoadPublicityComponent implements OnInit {

  imagen:File;
  imagenMin:File;
  description:string;
  imageURL: string;
  newPublicity: Publicity;
  id: any;
  

  constructor(private publicityService:PublicityService,private catalogueService:CatalogueService,private router:Router, private route: ActivatedRoute,
    private spinner: NgxSpinnerService, private authService: AuthServices, private servicebarbershop: BarbershopService, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.usuario = this.authService.usuario
    this.newPublicity = new Publicity()    
  }
  

  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  newBarbershop:Barbershop;
  usuario:Usuario;


  onUpload(){

    this.servicebarbershop.getbarber(this.usuario.id).subscribe(
      data => {

        this.newBarbershop = data

        

            
      }
    );


    setTimeout(() => {

      if(this.newBarbershop==null){

        this.reset();
        this.abrirModal();
      }else{
  
      this.spinner.show();
      this.catalogueService.upload(this.imagen, "publicity").subscribe( (response:any) => {

        if(response){
          
          this.newPublicity.url=response.url
          this.newPublicity.id_barbershop = this.newBarbershop
          this.publicityService.savePublicity(this.newPublicity).subscribe(
            response =>{
              this.reset();
              
              console.log(response);
              this.spinner.hide();
            } 
        )}
      })
      
    }
      
    }, 500);


    }

  reset(){
    this.imagen = null;
    this.imagenMin = null;


  }

  abrirModal(){
    this.modalService.open(ModalBarbershopComponent);
  }


}
