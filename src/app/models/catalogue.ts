import { Barbershop } from 'src/app/models/barbershop';
export class Catalogue {


    id: Number;
    description: string;
    name: string;
    url: string;
    owner: Barbershop;

    constructor(id:Number, name:string, url:string,description:string, owner:Barbershop) { 
        this.id=id,
        this.name=name,
        this.url=url,
        this.description=description,
        this.owner=owner;
    }

}

