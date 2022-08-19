import { Barber } from "./Barber";
import { Barbershop } from "./barbershop";

export class Cuts{

    id: Number;
    url: string;
    description: string;
    id_barbershop:Barbershop;
    id_barber:Barber;

    constructor(id: Number,url:string, description: string,  id_barbershop:Barbershop, id_barber:Barber) {
		this.id = id,
		this.url = url,
		this.description = description,
		this.id_barbershop = id_barbershop,
		this.id_barber = id_barber;
	}
}