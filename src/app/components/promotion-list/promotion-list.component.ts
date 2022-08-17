import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/pormotion/promotion.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {
  imagen:File; 
  images:any;
  constructor(private promotionService:PromotionService) { }

  ngOnInit(): void {

    this.loaderImage();
  }

  loaderImage():void{
    this.promotionService.listPromotion().subscribe(
      data =>{
        this.images = data;
        console.log(this.images);
        
      }
    )
  }

}
