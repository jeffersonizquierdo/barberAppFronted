import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usaurio } from 'src/app/models/Usuarios';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usaurio;

  constructor(private authServices:AuthServices, private router:Router) { 

    this.usuario = new Usaurio()
  }

  ngOnInit(): void {

    if(this.authServices.isAuthenticated()){
      Swal.fire('Login', `Hola ${this.authServices.usuario.username} ya estas autenticado`, 'info')
      this.router.navigate(['/homebarbershop'])
    }
  }

  login():void{
     
    console.log(this.usuario);

    if(  this.usuario.password == null || this.usuario.username == null){

      Swal.fire('Error Login', 'usuario o consrtaseña vacias!', 'error')
      return;

    }

    this.authServices.login(this.usuario).subscribe( response => {
    
      console.log(response);
        
      this.authServices.saveUser(response.access_token);
      this.authServices.saveToken(response.access_token);

      let usuario = this.authServices.usuario;

      this.router.navigate(['/homebarbershop'])
      Swal.fire('Login', 'Hola ' + usuario.username + ', bienvenido', 'success');
    
    }, error => {

      if(error.status == 400){
        Swal.fire('Error Login', 'usuario o contraseña incorrecta!', 'error')
      }

    }  
   );

   
  }
 

}
