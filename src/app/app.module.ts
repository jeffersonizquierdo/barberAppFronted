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
import { TableAppointmentComponent } from './components/table-appointment/table-appointment.component';
import { HeaderCustomerComponent } from './components/header-customer/header-customer.component';
import { ManageCatalogueComponent } from './components/manage-catalogue/manage-catalogue.component';
import { ManageCutsComponent } from './components/manage-cuts/manage-cuts.component';



const appRoutes: Routes = [

  
  {path:'homebarbershop', component:HomeBarbershopComponent},
  {path:'homecustomer', component:HomeCustomerComponent},
  {path:'managecuts', component:ManageCutsComponent},
  {path:'managecatalogue', component:ManageCatalogueComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeBarbershopComponent,
    HomeCustomerComponent,
    RankingComponent,
    HeaderBarbershopComponent,
    HeaderCustomerComponent,
    TableAppointmentComponent,
    ManageCutsComponent,
    ManageCatalogueComponent
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
