import { Barbershop } from 'src/app/models/barbershop';
export class Barber{

  id:Number;
  email:string;
  password: string;
  nickname: string;
  city: string;
  cellphone: string;
  typeUser: Number;
  photo:string;
  age:Date;
  description: string;
  qualification:Number;
  listBarbershpops: Barbershop[] = [];

  constructor(id:Number, email:string, password:string, nickname:string, city: string, cellphone:string, typeUser: Number,
    photo: string, age:Date, description:string, qualification:Number){

    this.id = id;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.city = city;
    this.cellphone = cellphone;
    this.typeUser = typeUser;
    this.photo = photo
    this.age = age;
    this.description = description;
    this.qualification = qualification;
    
  }

}