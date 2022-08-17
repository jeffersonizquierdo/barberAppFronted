import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  constructor(public authService: AuthServices) { }

  ngOnInit(): void {
  }

  anonymous = true;
  barbershop = false;
  barber = false;
  customer = false;


  // changeHeader(e:any){


  //   if(e == 'ROLE_BARBERSHOP') {

  //     this.anonymous = false;
  //     this.barbershop = true;
  //     this.barber = false;
  //     this.customer = false;
  //   }

  //   else if (e == null){
  //     return;
  //   }


  // }

}
