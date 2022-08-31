import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  constructor(public authService: AuthServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  logout():void{

    this.authService.logout();
    Swal.fire('Login', `session cerrada`, 'success')
    
    
    this.router.navigate(["/login"])
    
  }

}
