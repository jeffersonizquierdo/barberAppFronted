import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barber } from 'src/app/models/Barber';
import { Usuario } from 'src/app/models/Usuario';
import { BarberService } from 'src/app/services/barber/barber.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-barber',
  templateUrl: './profile-barber.component.html',
  styleUrls: ['./profile-barber.component.css']
})
export class ProfileBarberComponent implements OnInit {
  barbers: Barber;
  user:Usuario;
  usuario: Usuario;
  editActive = true;

  constructor(private serivceBarber:BarberService, private authservices:AuthServices, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.user=this.authservices.usuario;
    this.loader6();
    this.getUser()
  }

  editTrue(){
    this.editActive = !this.editActive;
  }

  loader6():void{
    this.serivceBarber.getbarber(this.user.id).subscribe(
      data =>{
        this.barbers =data;
        console.log(this.barbers.description);
        
      }
    )
  }

  getUser(){

    setTimeout(() => {
      this.usuarioService.getUser(this.barbers.id).subscribe((response: any)=>{
        this.usuario = response;
      })
    }, 500);
  }

  updateBarber(){
    this.serivceBarber.updateBarber(this.barbers).subscribe((response: any) => {

      if(response){

        this.usuario.city = this.barbers.city;
        this.usuario.cellphone = this.barbers.cellphone;
    
        this.usuarioService.updateUsuario(this.usuario).subscribe((data : any) => {
          Swal.fire("Hecho", "Has actualizado tu perfil", "success")
        })
       
        this.editTrue()
      }
    })
  }


}
