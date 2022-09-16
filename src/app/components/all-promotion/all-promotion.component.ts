import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PromotionService } from 'src/app/services/pormotion/promotion.service';

@Component({
  selector: 'app-all-promotion',
  templateUrl: './all-promotion.component.html',
  styleUrls: ['./all-promotion.component.css']
})
export class AllPromotionComponent implements OnInit {

  imagen:File; 
  images:any;
  constructor(private promotionService:PromotionService ,private sniper2:NgxSpinnerService) { }

  ngOnInit(): void {

    this.loaderImage();
  }

  loaderImage():void{
    console.log("entro a listar")
    this.promotionService.listallPromotion().subscribe(
      data =>{
        this.images = data;
        console.log("las lista");
        console.log(this.images);
        
      }
    )
  }

}
