import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {CreateOrderComponent} from './create-order/create-order.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  {path: 'order/create', component: CreateOrderComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
