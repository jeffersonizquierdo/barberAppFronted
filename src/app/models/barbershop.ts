import { Barber } from 'src/app/models/Barber';
export class Barbershop{

  id:Number;
  email:string;
  password: string;
  nickname: string;
  city: string;
  cellphone: string;
  typeUser: Number;
  photo:string;
  description: string;
  location:string;
  qualification: Number;
  idCatalogue:Number;
  listBarbers:Barber[] = [];


  constructor(id:Number, email:string, password: string, nickname:string, city:string, cellphone:string,
    typeUser:Number, photo:string, description:string, location:string, qualification:Number, idCatalogue:Number){
 
    this.id = id;
    this.email = email;
    this.password =password;
    this.nickname = nickname;
    this.city = city;
    this.cellphone = cellphone;
    this.typeUser = typeUser;
    this.photo = photo;
    this.description = description;
    this.location = location;
    this.qualification = qualification;
    this.idCatalogue = idCatalogue;

  }

}