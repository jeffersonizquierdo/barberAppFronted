import { Customer } from './../../models/Customer';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {

  constructor(public authService: AuthServices, private route: ActivatedRoute, private router: Router, 
    private usuarioService:UsuarioService, private customerService:CustomerService) { }

  ngOnInit(): void {

    this.usuarioSession = this.authService.usuario;
    this.saveCustomer();

  }


  usuarioSession:Usuario;
  usuarioConsult:Usuario;
  customer:Customer;


  saveCustomer(){

    this.usuarioService.getUser(this.usuarioSession.id).subscribe((response =>{

      this.usuarioConsult = response;
      
      console.log(this.usuarioConsult);
    }));

    
      // this.customerService.getCustomer(this.usuarioSession.id).subscribe((data:any) => {

      //   this.customer = data.customer;

      //   console.log("no entro");

      // })



  }


  logout():void{

    this.authService.logout();
    Swal.fire('Login', `session cerrada`, 'success')
    
    
    this.router.navigate(["/login"])
    
  }

}
