import { Component, OnInit } from '@angular/core';
import { PublicityService } from 'src/app/services/publicity/publicity.service';

@Component({
  selector: 'app-to-show-publications',
  templateUrl: './to-show-publications.component.html',
  styleUrls: ['./to-show-publications.component.css']
})
export class ToShowPublicationsComponent implements OnInit {

  listPublicity:any=[];

  constructor(private publicityService:PublicityService) { }

  ngOnInit(): void {
    this.publicityService.listPublicity().subscribe(
      data=>{
        this.listPublicity=data;
      }
    )
  }

}
