import { Component, OnInit } from '@angular/core';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-publication-barber',
  templateUrl: './publication-barber.component.html',
  styleUrls: ['./publication-barber.component.css']
})
export class PublicationBarberComponent implements OnInit {
  listPublicity2:any=[];
  constructor(private publicationServices:PublicityService,private BarbershopService:BarbershopService) { }

  ngOnInit(): void {
    this.loader3();
  }

  loader3():void{
    console.log("holi2")
    this.BarbershopService.listpublicyid().subscribe(
      data =>{
        console.log(data)
        this.listPublicity2=data;
        console.log(this.listPublicity2.description);
        
      }
    )
  }

}
