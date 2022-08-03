export class Barbershop{

  idBarbershop:Number;
  email:string;
  description: string;
  location:string;
  qualification: Number;


  constructor(idBarbershop:Number, email:string, descrepcion:string, location:string, qualification:Number){

    this.idBarbershop = idBarbershop;
    this.email = email
    this.description = descrepcion;
    this.location = location;
    this.qualification = qualification;

  }

}