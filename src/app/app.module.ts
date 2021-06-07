import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftBarComponent,
    MainBodyComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderDetailComponent,
    OrderItemsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
