import { Barbershop } from 'src/app/models/barbershop';
import { Barber } from './Barber';
export class Publicity {


    id: Number;
    description: string;
    url: string;
    id_barbershop: Barbershop;
    id_barber: Barber;


}