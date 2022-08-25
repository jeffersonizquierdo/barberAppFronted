import { Barbershop } from 'src/app/models/barbershop';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Catalogue } from 'src/app/models/catalogue';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { AuthServices } from 'src/app/models/AuthServices';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { Usuario } from 'src/app/models/Usuario';


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
  newBarbershop:Barbershop;
  usuario:Usuario;

  constructor(private catalogueService:CatalogueService,private spinner: NgxSpinnerService, private authService: AuthServices, private servicebarbershop: BarbershopService){}

  ngOnInit(): void {
  }
  // onSelect(e) { if (e.files.length > 5) { 
  //   alert("Only 5 files accepted."); 
  //   e.preventDefault(); 
  //   } 
  // }


  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }




  onUpload(){
<<<<<<< HEAD
    
    this.usuario = this.authService.usuario;

    this.servicebarbershop.getbarber(this.usuario.id).subscribe(
      data => {
        this.newBarbershop = data;
        console.log(this.newBarbershop);
        
      }
    );

=======
    // this.newBarbershop = new Barbershop(1, "barber", "dsd", "dsddsd", "Cali", "3000", 1, "photo", "descriptionBarbershop", "locationBarbershop", 0);
>>>>>>> d61f3c998d0d9a3edba9a1771b75d76fec5e77f5
    this.spinner.show();
    this.catalogueService.upload(this.imagen, "hairstyle").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.imageURL=response.url
        this.newCatalogue = new Catalogue(this.id,  this.name, this.imageURL, this.description,this.newBarbershop);
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

  reset(){
    this.imagen = null;
    this.imagenMin = null;
  }

}
