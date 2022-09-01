import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalBarbershopComponent } from './modals/modal-barbershop/modal-barbershop.component';

const routes: Routes = [
  {path:'sing-in-barbershop', component:ModalBarbershopComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
