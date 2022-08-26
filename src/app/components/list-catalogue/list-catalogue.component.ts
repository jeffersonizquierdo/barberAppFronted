import { Component, NgModule, OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrls: ['./list-catalogue.component.css']
})
export class ListCatalogueComponent implements OnInit {

  images:any=[];

  constructor(private imagenService:CatalogueService, private spinner2:NgxSpinnerService,) { }

  ngOnInit(): void {
   this.loaderImage();
  }

  loaderImage():void{
    this.imagenService.listCatalogo().subscribe(
      data =>{
        this.images = data;
        console.log(this.images);
        
      }
    )
  }

  deleter(id:Number): void{
    this.spinner2.show();
    this.imagenService.deleteCatalogue(id).subscribe(
      data=>{
        if(data){
          this.spinner2.hide();
          this.loaderImage()
        }
      },err=>{
        this.spinner2.hide();;
        alert(err);
        console.log(err);
      }
    )
  }

  openModal(){
    alert("modal")
  }
}
