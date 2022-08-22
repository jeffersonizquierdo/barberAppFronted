import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';
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



  logout():void{

    
    this.authService.logout();
    Swal.fire('Login', `session cerrada`, 'success')
    
  }

}
