import { Customer } from './../../models/Customer';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import swal from 'sweetalert2';

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
    this.usuarioConsult = new Usuario();
    this.saveCustomer();

  }


  usuarioSession:Usuario;
  usuarioConsult:Usuario;
  customer:Customer;


  saveCustomer(){

    this.usuarioService.getUser(this.usuarioSession.id).subscribe(
      data => {
        this.usuarioConsult = data;
    });

    this.customerService.getCustomer(this.usuarioSession.id).subscribe((data: any )=> {

      this.customer = data;

      console.log("customer consult");
      
      console.log(this.customer);
      
      setTimeout(() => {

        if(data==null){

          console.log("customer");
      
          console.log(this.customer);


          this.customer = new Customer()
          this.customer.id = this.usuarioConsult.id;
          this.customer.email = this.usuarioConsult.username;
          this.customer.password = this.usuarioConsult.password;
          this.customer.nickname = this.usuarioConsult.nickname;
          this.customer.city = this.usuarioConsult.city;
          this.customer.cellphone = this.usuarioConsult.cellphone;
          this.customer.typeUser = this.usuarioConsult.typeUser;
          this.customer.age = this.usuarioConsult.date
  
            this.customerService.saveCustomer(this.customer).subscribe(response => {

            })
  
          };
        
      }, 2000);

      })
  }


  logout():void{

    this.authService.logout();
    Swal.fire('Login', `session cerrada`, 'success')
    
    
    this.router.navigate(["/login"])
    
  }
}