import { Barbershop } from 'src/app/models/barbershop';
import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Catalogue } from 'src/app/models/catalogue';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';


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
  newCatalogue: Catalogue

  constructor(private catalogueService:CatalogueService,private router:Router,private spinner: NgxSpinnerService){}

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

  newBarbershop:Barbershop;


  onUpload(){
    this.newBarbershop = new Barbershop(1, "barber", "dsd", "dsddsd", "Cali", "3000", 1, "photo", "descriptionBarbershop", "locationBarbershop", 0);
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
            this.router.navigate(["/app-home-main"])
          } 
      )}
    })
    
  }

  reset(){
    this.imagen = null;
    this.imagenMin = null;
    this.description="";
    this.name="";

  }

}
