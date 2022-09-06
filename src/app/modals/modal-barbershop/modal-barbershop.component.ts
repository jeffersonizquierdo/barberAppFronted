import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Barbershop } from 'src/app/models/barbershop';
import { Usuario } from 'src/app/models/Usuario';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modal-barbershop',
  templateUrl: './modal-barbershop.component.html',
  styleUrls: ['./modal-barbershop.component.css']
})
export class ModalBarbershopComponent implements OnInit {
  imagen:File;
  imagenMin:File;

  barbershop: Barbershop = new Barbershop();
  usuarioSesion: Usuario;
  usuarioConsult: Usuario;

  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  constructor(private catalogueService:CatalogueService,private servicebarbershop: BarbershopService,private auhtService: AuthServices, 
    private usuarioService: UsuarioService, private spinner: NgxSpinnerService) { }



  ngOnInit(): void {
    this.usuarioConsult = new Usuario();
    this.usuarioSesion = this.auhtService.usuario;
  }

  saveBarbershop(){
    this.catalogueService.upload(this.imagen, "perfil").subscribe( (response:any) => {
    this.barbershop.photo=response.url;

    this.usuarioService.getUser(this.usuarioSesion.id).subscribe(
      data => {
        this.usuarioConsult = data;
        setTimeout(() => {
          this.barbershop.id=this.usuarioConsult.id;
          this.barbershop.cellphone=this.usuarioConsult.cellphone;
          this.barbershop.city=this.usuarioConsult.city;
          this.barbershop.email=this.usuarioConsult.username;
          this.barbershop.nickname=this.usuarioConsult.nickname;
          this.barbershop.password=this.usuarioConsult.password;
          console.log(this.barbershop)
          console.log(this.usuarioConsult)
          this.servicebarbershop.saveBarbeshop(this.barbershop).subscribe(
            response  => {
              console.log(response);
              swal.fire('Bien hecho',` ${this.barbershop.nickname} acabas de completar tu perfil` , 'success')
            }
          )
        }, 500);
    })  
   
  });
 
}

}
