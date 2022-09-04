import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario;

  constructor(private authServices:AuthServices, private router:Router) { 

  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.usuario = this.authServices.usuario;
  }


  login():void{
    console.log(this.usuario);

    if(this.usuario.password == null || this.usuario.username == null){

      Swal.fire('Error Login', 'usuario o consrtaseña vacias!', 'error')
      return;

    }

    this.authServices.login(this.usuario).subscribe( response => {
    
      console.log(response);

      this.authServices.saveUser(response.access_token);
      this.authServices.saveToken(response.access_token);

      this.authServices.saveTypeUser(parseInt(response.typeUser));

      

      if (response.typeUser == 1){

        
        this.router.navigate(['/homebarbershop'])
        setTimeout(() => {
          
          window.location.reload();
          

        }, 1000);

        Swal.fire('Login', 'Hola ' + response.nickname + ', bienvenido', 'success');
        
        

      } else if(response.typeUser == 2){


        this.router.navigate(['/homebarber'])
        setTimeout(() => {
          
          window.location.reload();
          

        }, 1000);

        Swal.fire('Login', 'Hola ' + response.nickname + ', bienvenido', 'success');


      } else if(response.typeUser == 3){


        this.router.navigate(['/homecustomer'])
        setTimeout(() => {
          
          window.location.reload();
          

        }, 1000);

        Swal.fire('Login', 'Hola ' + response.nickname + ', bienvenido', 'success');

      }

    }, error => {

      if(error.status == 400){
        Swal.fire('Error Login', 'usuario o contraseña incorrecta!', 'error')
      }

    }

    
   );

   setTimeout(() => {
    
   }, 200);
  }

}