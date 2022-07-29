export class user{

    id:Number;
    cellphone: string;
    city: string;
    email:string;
    nickname: string;
    password: string;
    type_user: Number;

    constructor(id:Number, cellphone: string, city: string, email:string, nickname: string, password: string, type_user: Number){


        this.id =id;
        this.cellphone = cellphone;
        this.city = city;
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.type_user = type_user;

    }
}