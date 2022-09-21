import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Customer } from 'src/app/models/Customer';
import { Usuario } from 'src/app/models/Usuario';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  constructor(private customerservice:CustomerService, private authservices:AuthServices, private usuarioService:UsuarioService) { }

  
  customer:Customer;
  editActive = true;
  usuario:Usuario;

  user:Usuario;
  ngOnInit(): void {
    this.customer=new Customer();
    this.user=this.authservices.usuario;
  
    this.loader();
    this.getUser()
  }

  editTrue(){
    this.editActive = !this.editActive;
  }


  getUser(){

    setTimeout(() => {
      this.usuarioService.getUser(this.customer.id).subscribe((response: any)=>{
        this.usuario = response;
      })
    }, 500);
  }

  
  loader():void{
    this.customerservice.getCustomer(this.user.id).subscribe(
      data =>{
        this.customer =data;
        console.log(data);
        
      }
    )
  }


  updateCustomer(){
    this.customerservice.updatecustomer(this.customer).subscribe((response: any) => {

      if(response){

        this.usuario.city = this.customer.city;
        this.usuario.cellphone = this.customer.cellphone;
    
        this.usuarioService.updateUsuario(this.usuario).subscribe((data : any) => {
          Swal.fire("Hecho", "Has actualizado tu perfil", "success")
        })
       
        this.editTrue()
      }
    })
  }
   


}
