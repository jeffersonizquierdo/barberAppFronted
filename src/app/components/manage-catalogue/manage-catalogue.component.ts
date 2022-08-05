import { ViewChild } from '@angular/core';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private catalogueService:CatalogueService,
    private router:Router,
    private spinner: NgxSpinnerService
    ) { }

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
    this.spinner.show();
    this.catalogueService.upload(this.imagen).subscribe(
      data=>{
        this.spinner.hide();
        this.router.navigate(['/']);
      },
      err=>{
        this.spinner.hide();
        alert(err.console.error.mensaje);
        this.reset();
      }
    )
  }

  reset(){
    this.imagen = null;
    this.imagenMin = null;
    this.imagenFile.nativeElement.value='';
  }

}
