export class Customer{

  id:Number;
  age:Date;
  email:string;
  gender:string;

  constructor(id:Number, age:Date, email:string, gender:string){

    this.id = id;
    this.age = age;
    this.email = email;
    this.gender = gender;
  }

}