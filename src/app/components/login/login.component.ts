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
  }

  login():void{
     
    console.log(this.usuario);
    if(  this.usuario.password == null || this.usuario.username == null){
      Swal.fire('Error Login', 'usuario o consrtaseña vacias!', 'error')
      return;
    }
      this.authServices.login(this.usuario).subscribe( response => {
        console.log(response);
        

      let payload = JSON.parse(atob(response.access_token.split(".")[1]))
      console.log(payload);

      this.authServices.saveUser(response.access_token);
      this.authServices.saveToken(response.access_token);

      this.router.navigate(['/homebarbershop'])
      Swal.fire('Login', 'Hola ' + payload.user_name + ', bienvenido', 'success')})
    
  }
 

}
