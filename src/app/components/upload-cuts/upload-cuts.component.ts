import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Barber } from 'src/app/models/Barber';
import { Barbershop } from 'src/app/models/barbershop';
import { Cuts } from 'src/app/models/Cuts';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { CutsService } from 'src/app/services/cuts/cuts.service';

@Component({
  selector: 'app-upload-cuts',
  templateUrl: './upload-cuts.component.html',
  styleUrls: ['./upload-cuts.component.css']
})
export class UploadCutsComponent implements OnInit {

  
  imagen:File;   
  imageURL:string;
  newcuts:Cuts;
  imagenMin:File;
  images:any;
  id: Number;
  description: string;
  newBarbershop :Barbershop;
  newbarber:Barber;
  

  constructor(private catalogueService:CatalogueService,private spinner:NgxSpinnerService,private cutsService:CutsService) { }

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


  savecuts(){
    //this.newBarbershop = new Barbershop(1, "barber", "dsd", "dsddsd", "Cali", "3000", 1, "photo", "descriptionBarbershop", "locationBarbershop", 0);
    this.spinner.show();
    this.catalogueService.upload(this.imagen, "cutslist").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.imageURL=response.url
        this.newcuts = new Cuts(this.id,this.imageURL, this.description,  this. newBarbershop, this.newbarber);
        
        
        this.cutsService.savecuts(this.newcuts).subscribe(
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
    this.description="";
  }
  

}



