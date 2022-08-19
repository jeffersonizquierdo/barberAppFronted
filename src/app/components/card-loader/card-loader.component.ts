import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.css']
})
export class CardLoaderComponent implements OnInit {


  @Input() imagen=75;
  @Input() bar=15;
  @Input() total=1;


  public totalbar=[];

  public finalstyleimagen={};

  public finalstylesbar={};

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.bar; i++) {
      this.totalbar.push(i);
      
    }


    this.finalstyleimagen={
      with:`${this.imagen}px`,
      height:`${this.imagen}px`
    };

    this.finalstylesbar={
      height:`${this.bar}px`
    };


  }

}
