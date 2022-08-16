import { Component, OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrls: ['./list-catalogue.component.css']
})
export class ListCatalogueComponent implements OnInit {

  images:any=[];

  constructor(private imagenService:CatalogueService, private spinner:NgxSpinnerService) { }

  

  ngOnInit(): void {
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
    this.spinner.show();
    this.imagenService.deleteCatalogue(id).subscribe(
      data=>{
        this.spinner.hide();
        this.loaderImage()
      },err=>{
        this.spinner.show();
        console.log(err);
      }
    )
  }
}
