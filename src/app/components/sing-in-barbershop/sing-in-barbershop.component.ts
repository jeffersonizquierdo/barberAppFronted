import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/User';

@Component({
  selector: 'app-sing-in-barbershop',
  templateUrl: './sing-in-barbershop.component.html',
  styleUrls: ['./sing-in-barbershop.component.css']
})
export class SingInBarbershopComponent implements OnInit {

 
  @Input() user:user;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.user = this.route.snapshot.params['user']
    console.log(user);
    

  }
 
  savebarbershop(){

  }
  

}
