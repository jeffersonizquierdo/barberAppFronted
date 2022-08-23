import { Barber } from "./Barber";
import { Barbershop } from "./barbershop";
import { Customer } from "./Customer";

export class Usuario{

id:Number;
username:string;
password:string;
email:string;
typeUser:Number;
enabled:boolean;
date:Date;
city: string;
cellphone:String;
roles: string [] = []
barbershop:Barbershop;
barber:Barber;
customer:Customer;

}