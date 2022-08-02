export class Barbershop{

  idBarbershop:Number;
  description: string;
  location:string;
  qualification: Number;


  constructor(idBarbershop:Number, descrepcion:string, location:string, qualification:Number){

    this.idBarbershop = idBarbershop;
    this.description = descrepcion;
    this.location = location;
    this.qualification = qualification;

  }

}