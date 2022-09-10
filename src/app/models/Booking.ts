import { Barber } from './Barber';
import { Barbershop } from './barbershop';
import { Customer } from './Customer';
export class Booking {

    id : Number
    barber: Barber;
    barbershop: Number;
    customer:Customer;
    reservationDate:Date;
    completed:Boolean;

}