import { Component, OnInit } from '@angular/core';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-publication-barbershop',
  templateUrl: './publication-barbershop.component.html',
  styleUrls: ['./publication-barbershop.component.css']
})
export class PublicationBarbershopComponent implements OnInit {
  public  listPublicity2:any=[];
  constructor(private BarbershopService:BarbershopService) { }

  ngOnInit(): void {
    this.loader3();
  }

  loader3():void{
    this.BarbershopService. listpublicyid().subscribe(
      data =>{
        this.listPublicity2 =data;
        console.log(this.listPublicity2.description);
        
      }
    )
  }

}
