import { Component, OnInit } from '@angular/core';
import { Barber } from 'src/app/models/Barber';
import { AuthServices } from '../../models/AuthServices';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { BarberService } from '../../services/barber/barber.service';
import swal from 'sweetalert2';
import { CatalogueService } from '../../services/catalogue/catalogue.service';

@Component({
  selector: 'app-modal-barber',
  templateUrl: './modal-barber.component.html',
  styleUrls: ['./modal-barber.component.css']
})
export class ModalBarberComponent implements OnInit {

  constructor(private auhtService: AuthServices, private usuarioService: UsuarioService, private barberServices : BarberService, private servicecatalogue: CatalogueService) { }

  barber:Barber = new Barber();
  usuarioSesion: Usuario;
  usuarioConsult: Usuario;
  imagen:File;
  imagenMin:File;

  ngOnInit(): void {

    this.usuarioConsult = new Usuario();
    this.usuarioSesion = this.auhtService.usuario;
  }


  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  saveBarber(){
    this.usuarioService.getUser(this.usuarioSesion.id).subscribe(
      data => {
        this.usuarioConsult = data;

    });

    this.servicecatalogue.upload(this.imagenMin, "perfil").subscribe((response : any) => {

      if (response) {
 
        this.barber.photo = response.url
        console.log(response.url);

        this.barber.id = this.usuarioConsult.id;
        this.barber.email = this.usuarioConsult.username;
        this.barber.password = this.usuarioConsult.password;
        this.barber.nickname = this.usuarioConsult.nickname;
        this.barber.city = this.usuarioConsult.city;
        this.barber.cellphone = this.usuarioConsult.cellphone;
        this.barber.typeUser = this.usuarioConsult.typeUser;
        this.barber.age = this.usuarioConsult.date;
        this.barber.qualification = 0;
        
        this.barberServices.saveBarber(this.barber).subscribe(
          response  => {
            console.log(response);
            swal.fire('Bien hecho',` ${this.barber.nickname} acabas de completar tu perfil` , 'success')
          })  
      }
      
    })
    
    this.barber.id = this.usuarioConsult.id;
    this.barber.email = this.usuarioConsult.username;
    this.barber.password = this.usuarioConsult.password;
    this.barber.nickname = this.usuarioConsult.nickname;
    this.barber.city = this.usuarioConsult.city;
    this.barber.cellphone = this.usuarioConsult.cellphone;
    this.barber.typeUser = this.usuarioConsult.typeUser;
    this.barber.age = this.usuarioConsult.date;

    console.log(this.barber);
    


    this.barberServices.saveBarber(this.barber).subscribe(

      response  => {
        console.log(response);
        swal.fire('Bien hecho',` ${this.barber.nickname} acabas de completar tu perfil` , 'success')
      }
    )


  }

}
