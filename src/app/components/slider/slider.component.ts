import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  cortes:any[]=[
    { name:'Difuminacion',
      img:'../../../assets/images/slider1.jpg',
      desc:'Barbero Difuminando un corte'},

      {name:'Marcando',
        img:'../../../assets/images/slider2.jpg',
      desc:'Barbero marcando el Difuminado'},

      {name:'Difuminacion lados',
        img:'../../../assets/images/slider3.jpg',
      desc:'Barbero Difuminando los laterales del corte'},

      {name:'Difuminacion Atras',
        img:'../../../assets/images/slider4.jpg',
      desc:'Barbero Difuminando un corte en la parte de atras'},

      {name:'Marcado de Barba',
        img:'../../../assets/images/slider5.jpg',
      desc:'Barbero marcando la barba'},

      {name:'Retoques con Tijeras',
        img:'../../../assets/images/slider1.jpg',
      desc:'Barbero cortando las puntas del cabello'},
  ]

  constructor(private _config:NgbCarouselConfig) { 
    _config.interval=3000;
    _config.pauseOnHover=true;
    _config.showNavigationArrows=false;
  }

  ngOnInit(): void {
  }

}
