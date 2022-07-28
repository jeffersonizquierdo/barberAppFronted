export class user{

    id:Number;
    name:string;
    city:string;
    typeuser: Number;
    email:string;
    password: string;

    constructor(id:Number, name:string, city:string, typeUser:Number, email:string, password:string){

        this.id = id,
        this.name = name;
        this.city = city;
        this.typeuser = typeUser;
        this.email = email;
        this.password = password;
    }
}