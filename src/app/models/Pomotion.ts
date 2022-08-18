import { Barbershop } from "./barbershop";

export class Promotion
 {


    id: Number;
    description: string;
    name: string;
    url: string;
    owner: Barbershop;

    constructor(id:Number, description:string, name:string, url:string, owner:Barbershop) { 
        this.id=id,
        this.description=description,
        this.name=name,
        this.url=url,
        this.owner=owner;
    }

}
