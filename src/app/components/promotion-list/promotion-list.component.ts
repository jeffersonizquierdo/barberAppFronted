import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PromotionService } from 'src/app/services/pormotion/promotion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.css']
})
export class PromotionListComponent implements OnInit {
  imagen:File; 
  images:any;
  constructor(private promotionService:PromotionService ,private sniper2:NgxSpinnerService) { }

  ngOnInit(): void {

    //this.loaderImage();
  }

  // loaderImage():void{
  //   this.promotionService.listPromotion().subscribe(
  //     data =>{
  //       this.images = data;
  //       console.log(this.images);
        
  //     }
  //   )
  // }

  delete  (id:Number):void{

    // Swal.fire({
    //   title: 'Desea elimnar esta promocion',
    //   icon: 'question',
    //   iconHtml: '?',
    //   confirmButtonText: 'si',
    //   cancelButtonText: 'no',
    //   showCancelButton: true,
    //   showCloseButton: true
    // })

    this.promotionService.deletepromotion(id).subscribe(
      data=>{
        if(data){
          //this.loaderImage()
        }
      },err=>{
        alert(err)
        console.log(err)
      }
    )
  }
}
 