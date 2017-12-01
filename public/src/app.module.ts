import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import moduleName from './app.module.ajs';

import { locationServiceProvider, productServiceProvider } from './ajs.upgradedproviders';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent
    ],
    entryComponents: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent
    ],
    providers: [
        CustomerService,
        OrderService,
        locationServiceProvider,
        productServiceProvider
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule){

    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [moduleName], {strictDi: true});
    }
}