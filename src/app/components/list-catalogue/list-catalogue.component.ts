import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/models/catalogue';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';

@Component({
  selector: 'app-list-catalogue',
  templateUrl: './list-catalogue.component.html',
  styleUrls: ['./list-catalogue.component.css']
})
export class ListCatalogueComponent implements OnInit {

  imagenes:Catalogue[]=[];

  constructor(private imagenService:CatalogueService) { }

  ngOnInit(): void {
    this.imagenService.list().subscribe(
      data =>{
        this.imagenes = data;
      }
    )
  }

}
