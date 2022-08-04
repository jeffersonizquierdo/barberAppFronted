export class Barber{

  id:Number;
  age:Date;
  email:string;
  gender:string;
  description:string;
  qualification:Number;
  idCatalogue:Number;

  constructor(id:Number, age:Date, email:string, description:string, gender:string, qualification:Number, idCatalogue:Number){

    this.id = id;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.qualification = qualification;
    this.description = description;
    this.idCatalogue = idCatalogue;
  }

}