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

  @ViewChild('imagenInputFile', {static: false}) imagenFile: ElementRef;

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

  onUpload(){
    this.spinner.show();
    this.catalogueService.upload(this.imagen, "hairstyle").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.imageURL=response.url
        this.newCatalogue = new Catalogue(this.id, this.description, this.name, this.imageURL,  1);
        this.catalogueService.saveCatalogue(this.newCatalogue).subscribe(
          response => console.log(response)
      )}
    })
    this.spinner.hide();
  }

  reset(){
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value='';
  }

}
