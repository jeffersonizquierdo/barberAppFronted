export class Customer{

  id:Number;
  email:string;
  password: string;
  nickname: string;
  city: string;
  cellphone: string;
  typeUser: Number;
  photo:string;
  age:Date;

  constructor(id:Number,email:string, password: string, nickname: string, city: string, cellphone: string,
    typeUser: Number,photo:string, age:Date){

    this.id = id;
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.city = city;
    this.cellphone = cellphone;
    this.typeUser = typeUser;
    this.photo = photo;
    this.age = age;
  }

}