import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/models/AuthServices';
import { Customer } from 'src/app/models/Customer';
import { Usuario } from 'src/app/models/Usuario';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  constructor(private customerservices:CustomerService, private authservices:AuthServices) { }
  customer:Customer;

  user:Usuario;
  ngOnInit(): void {
    this.customer=new Customer();
    this.user=this.authservices.usuario;
  
    this.loader();
  }

  
  loader():void{
    this.customerservices.getCustomer(this.user.id).subscribe(
      data =>{
        this.customer =data;
        console.log(data);
        
      }
    )
  }
   


}
