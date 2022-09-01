import { Component, OnInit } from '@angular/core';
import { Barbershop } from 'src/app/models/barbershop';
import { BarbershopService } from 'src/app/services/barbershop/barbershop.service';
import { CatalogueService } from 'src/app/services/catalogue/catalogue.service';

@Component({
  selector: 'app-modal-barbershop',
  templateUrl: './modal-barbershop.component.html',
  styleUrls: ['./modal-barbershop.component.css']
})
export class ModalBarbershopComponent implements OnInit {
  imagen:File;
  imagenMin:File;

  barbershop: Barbershop = new Barbershop();

  constructor(private catalogueService:CatalogueService,private servicebarbershop: BarbershopService) { }

  onFileChange(event){
    this.imagen = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any)=>{
      this.imagenMin= evento.target.result;
    };
    fr.readAsDataURL(this.imagen);
  }

  ngOnInit(): void {
  }

  sveBarbershop(){
    this.catalogueService.upload(this.imagen, "perfiles").subscribe( (response:any) => {
    this.barbershop.photo=response.url;
  })
    // this.servicebarbershop.saveBarbeshop(this.barbershop).subscribe(
      
    // );
  }

 

}
