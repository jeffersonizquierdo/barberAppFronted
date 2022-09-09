import { Barber } from './Barber';
import { Barbershop } from './barbershop';
import { Customer } from './Customer';
export class Booking {

    id : Number
    barber: Barber;
    owner: Barbershop;
    customer:Customer;
    reservation_date:Date;
    completed:Boolean;

}