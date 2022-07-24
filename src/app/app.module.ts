import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { BookingComponent } from './components/booking/booking.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    LoginComponent,
    SingInComponent,
    BookingComponent,
    SliderComponent,
    HeaderHomeComponent 
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
