import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from 'src/app/models/AuthServices';

import { Barbershop } from 'src/app/models/barbershop';
import { Promotion } from 'src/app/models/Pomotion';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { PromotionService } from 'src/app/services/pormotion/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
  
})
export class PromotionComponent implements OnInit {
  imagen:File;   

  description:string;
  barbershop:Barbershop;
  imagenMin:File;
  images:any;


  promotion:Promotion;
  usuario:Usuario;
  
  constructor(private catalogueService:CatalogueService,private router:Router, private promotionService:PromotionService ,
    private spinner:NgxSpinnerService, private authService: AuthServices, private servicebarbershop: BarbershopService) { }

  ngOnInit(): void {

    this.usuario = new Usuario()

    console.log(this.usuario);
    
    this.promotion = new Promotion()
     
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

    this.usuario = this.authService.usuario;

    this.servicebarbershop.getbarber(this.usuario.id).subscribe(
      data => {
        this.barbershop = data;     
      }
    );

    this.spinner.show();
    this.catalogueService.upload(this.imagen, "promotionsimages").subscribe( (response:any) => {
      if(response){
        console.log(response.url);
        this.promotion.url=response.url



        
        this.promotion.owner = this.barbershop
        this.promotionService.savePromotion(this.promotion).subscribe(
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
    this.promotion.description="";
    this.promotion.name="";

  }
}
