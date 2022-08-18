import { Barbershop } from 'src/app/models/barbershop';
export class Publicity {


    id: Number;
    description: string;
    url: string;
    owner: Barbershop;

    constructor(id:Number, url:string,description:string, owner:Barbershop) { 
        this.id=id,
        this.url=url,
        this.description=description,
        this.owner=owner;
    }

}