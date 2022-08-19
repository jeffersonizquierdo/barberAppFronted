import { HomeBarberComponent } from './components/home-barber/home-barber.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBarbershopComponent } from './components/home-barbershop/home-barbershop.component';
import { FormsModule } from '@angular/forms';
import { HomeCustomerComponent } from './components/home-customer/home-customer.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TableAppointmentComponent } from './components/table-appointment/table-appointment.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ManagePromotionComponent } from './components/manage-promotion/manage-promotion.component';
import { BarberMeshShiftsComponent } from './components/barber-mesh-shifts/barber-mesh-shifts.component';
import { BarbershopMeshShiftsComponent } from './components/barbershop-mesh-shifts/barbershop-mesh-shifts.component';
import { HistoriesCutsComponent } from './components/histories-cuts/histories-cuts.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';


//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4cd48b3eb2fc627234ad396f5176910dfd05c187

import { PromotionListComponent } from './components/promotion-list/promotion-list.component';
import { ListBarberComponent } from './components/list-barber/list-barber.component';


<<<<<<< HEAD
=======
import { ListCatalogueComponent } from './components/list-catalogue/list-catalogue.component';
import { OpenModalComponent } from './components/open-modal/open-modal.component';
import { LoadPublicityComponent } from './components/load-publicity/load-publicity.component';
>>>>>>> 900f1b37845e67e85166e540fc7b8112575ce755
=======
import { ListCatalogueComponent } from './components/list-catalogue/list-catalogue.component';
import { OpenModalComponent } from './components/open-modal/open-modal.component';
import { LoadPublicityComponent } from './components/load-publicity/load-publicity.component';
import { ManageCatalogueComponent } from './components/manage-catalogue/manage-catalogue.component';
import { ListBarbershopComponent } from './components/list-barbershop/list-barbershop.component';
import { ToShowPublicationsComponent } from './components/to-show-publications/to-show-publications.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import { UploadCutsComponent } from './components/upload-cuts/upload-cuts.component';
>>>>>>> 4cd48b3eb2fc627234ad396f5176910dfd05c187



const appRoutes: Routes = [

  {path:'homebarbershop', component:HomeBarbershopComponent},
  {path:'homecustomer', component:HomeCustomerComponent},
  {path:'barbershopmeshshifts', component:BarbershopMeshShiftsComponent},
  {path:'barbermeshshifts', component:BarberMeshShiftsComponent},
  {path:'homebarber', component:HomeBarberComponent},
  {path:'historiescuts', component:HistoriesCutsComponent},
  {path:'login', component:LoginComponent},
  {path:'singup', component:SingInComponent},
  {path:'p', component:LoadPublicityComponent},
  {path:'promotions', component:PromotionComponent},
  {path:'list-barber', component:ListBarberComponent},
  {path:'list-barbershop', component:ListBarbershopComponent},
  {path:'show-publication', component:ToShowPublicationsComponent},
  {path:'upload-cuts', component:UploadCutsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    SliderComponent,
    HeaderHomeComponent,
    SingInComponent,
    HomeBarbershopComponent,
    HomeCustomerComponent,
    RankingComponent,
    TableAppointmentComponent,
    PromotionComponent,
    ManagePromotionComponent,
    BarberMeshShiftsComponent,
    BarbershopMeshShiftsComponent,
    HomeBarberComponent,
    HistoriesCutsComponent,
<<<<<<< HEAD
<<<<<<< HEAD

    PromotionListComponent,
=======
=======
    PromotionListComponent,
    ListBarberComponent,
>>>>>>> 4cd48b3eb2fc627234ad396f5176910dfd05c187
    ManageCatalogueComponent,
    ListCatalogueComponent,
    OpenModalComponent,
    LoadPublicityComponent,
<<<<<<< HEAD
>>>>>>> 900f1b37845e67e85166e540fc7b8112575ce755
=======
    ListBarbershopComponent,
    ToShowPublicationsComponent,
    CardLoaderComponent,
    UploadCutsComponent,

>>>>>>> 4cd48b3eb2fc627234ad396f5176910dfd05c187
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModalModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
