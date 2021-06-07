import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderCreateComponent} from './order-create/order-create.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderItemsComponent} from './order-items/order-items.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: 'order/list', component: OrderListComponent },
  { path: '', redirectTo: 'order/list', pathMatch: 'full' },
  {path: 'order/detail', component: OrderDetailComponent},
  {path: 'order', component: OrderComponent, children: [
      {path: '', component: OrderCreateComponent},
      {path: 'items', component: OrderItemsComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
