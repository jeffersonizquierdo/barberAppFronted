import { Barbershop } from 'src/app/models/barbershop';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Catalogue } from 'src/app/models/catalogue';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { AuthServices } from 'src/app/models/AuthServices';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { Usuario } from 'src/app/models/Usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBarbershopComponent } from 'src/app/modals/modal-barbershop/modal-barbershop.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-manage-catalogue',
  templateUrl: './manage-catalogue.component.html',
  styleUrls: ['./manage-catalogue.component.css']
})
export class ManageCatalogueComponent implements OnInit {


  imagen:File;
  imagenMin:File;
  description:string;
  name:string;
  id:number;
  imageURL:string
  
  

  //object
  newCatalogue: Catalogue;
  barbershop:Barbershop;
  usuario:Usuario;

  constructor(private catalogueService:CatalogueService,private spinner: NgxSpinnerService, private authService: AuthServices, private servicebarbershop: BarbershopService,private modalService:NgbModal){}

  ngOnInit(): void {


  }


  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  onUpload(){
    Swal.fire({
      title: 'Subir catálogo',
      text: "¿Desea subir este catálogo?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.usuario = this.authService.usuario;
        this.servicebarbershop.getbarber(this.usuario.id).subscribe(
          data => {
            this.barbershop = data;        
          }
        );
        setTimeout(() => {
          if(this.barbershop==null){
            this.reset();
            this.abrirModal();
          }else{
            this.catalogueService.upload(this.imagen, "hairstyle").subscribe( (response:any) => {
              if(response){
                this.imageURL=response.url
                this.newCatalogue = new Catalogue(this.id,  this.name, this.imageURL, this.description,this.barbershop);
                console.log(this.newCatalogue);
                this.catalogueService.saveCatalogue(this.newCatalogue).subscribe(
                  response =>{
                    this.reset();
                    console.log(response);
                    this.spinner.hide();
                    window.location.reload();
                  } 
              )}
            })
          }
        }, 500);
        Swal.fire(
          'Catálogo subido',
          `Se ha subido el catálogo con exito.`,
          'success'
        )
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
    })
  }

  reset(){
    this.imagen = null;
    this.imagenMin = null;
  }

  
  abrirModal(){
      this.modalService.open(ModalBarbershopComponent);
  }

}
