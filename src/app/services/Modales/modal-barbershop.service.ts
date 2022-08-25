import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalBarbershopService {


  modal: boolean = false;

  constructor() { }


  showModal(){

    this.modal = true;
  }

  
  closeModal(){

    this.modal = true;
  }

}
