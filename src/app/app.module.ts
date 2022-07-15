import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBarbershopComponent } from './components/home-barbershop/home-barbershop.component';
import { FormsModule } from '@angular/forms';
import { HomeCustomerComponent } from './components/home-customer/home-customer.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HeaderBarbershopComponent } from './components/header-barbershop/header-barbershop.component';


const appRoutes: Routes = [

  
  {path:'homebarbershop', component:HomeBarbershopComponent},
  {path:'homecustomer', component:HomeCustomerComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeBarbershopComponent,
    HomeCustomerComponent,
    RankingComponent,
    HeaderBarbershopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
