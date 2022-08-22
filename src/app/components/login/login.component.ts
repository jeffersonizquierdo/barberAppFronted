import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/models/AuthServices';
import { Usaurio } from 'src/app/models/Usuario';
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

      if(this.usuario.typeUser = 1){

        this.router.navigate(['/homebarbershop/1'])
      }

      else if(this.usuario.typeUser == 2){
        
        this.router.navigate(['/homebarber/1'])
      }

      else if(this.usuario.typeUser == 3){
        
        this.router.navigate(['/homecustomer/1'])
      }

      
      Swal.fire('Login', 'Hola ' + usuario.username + ', bienvenido', 'success');
    
    }, error => {

      if(error.status == 400){
        Swal.fire('Error Login', 'usuario o contraseña incorrecta!', 'error')
      }

    }  
   );

   
  }
 

}
