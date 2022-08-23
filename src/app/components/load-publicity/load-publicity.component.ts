import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Barbershop } from 'src/app/models/barbershop';
import { Catalogue } from 'src/app/models/catalogue';
import { Publicity } from 'src/app/models/Publicity';
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
  newPublicity: any;
  id: Number;
  

  constructor(private publicityService:PublicityService,private catalogueService:CatalogueService,private router:Router,private spinner: NgxSpinnerService) { }

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

  newBarbershop:Barbershop;


  onUpload(){
    this.newBarbershop = new Barbershop(1, "barber", "dsd", "dsddsd", "Cali", "3000", 1, "photo", "descriptionBarbershop", "locationBarbershop", 0);
    this.spinner.show();
    this.catalogueService.upload(this.imagen, "publicity").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.imageURL=response.url
        this.newPublicity = new Publicity (this.id, this.imageURL, this.description, this.newBarbershop);
        console.log(this.newPublicity);
        
        this.publicityService.savePublicity(this.newPublicity).subscribe(
          response =>{
            this.reset();
            console.log(response);
            this.spinner.hide();
          } 
      )}
    })
    
  }

  reset(){
    this.imagen = null;
    this.imagenMin = null;
  }
  

}
