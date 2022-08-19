import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-cuts',
  templateUrl: './upload-cuts.component.html',
  styleUrls: ['./upload-cuts.component.css']
})
export class UploadCutsComponent implements OnInit {

  
  imagen:File;
  imagenMin:File;
  description:string;
  name:string;
  id:number;
  imageURL:string
  

  constructor() { }

  ngOnInit(): void {
  }

}


