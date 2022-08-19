import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { Barbershop } from 'src/app/models/barbershop';
import { Promotion } from 'src/app/models/Pomotion';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { PromotionService } from 'src/app/services/pormotion/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
  
})
export class PromotionComponent implements OnInit {
  imagen:File;   
  imageURL:string;
  newPromotion:Promotion;
  id:Number;
  name:string;
  description:string;
  newBarbershop:Barbershop;
  imagenMin:File;
  images:any;
  
  constructor(private catalogueService:CatalogueService,private router:Router, private promotionService:PromotionService ,private spinner:NgxSpinnerService) { }

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
  savePromotion(){
    this.newBarbershop = new Barbershop(1, "barber", "dsd", "dsddsd", "Cali", "3000", 1, "photo", "descriptionBarbershop", "locationBarbershop", 0);
    this.spinner.show();
    this.catalogueService.upload(this.imagen, "promotionsimages").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.imageURL=response.url
        this.newPromotion = new Promotion(this.id, this.description,   this.name,  this.imageURL,this.newBarbershop);
        
        
        this.promotionService.savePromotion(this.newPromotion).subscribe(
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
    this.name="";

  }
}
