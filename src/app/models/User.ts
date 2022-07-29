export class user{

    id:Number;
    cellphone: string;
    city: string;
    email:string;
    nickname: string;
    password: string;
    typeUser: string;

    constructor(id:Number, cellphone: string, city: string, email:string, nickname: string, password: string, typeUser: string){


        this.id = id;
        this.cellphone = cellphone;
        this.city = city;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.typeUser = typeUser;

    }
}