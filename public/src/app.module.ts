import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import moduleName from './app.module.ajs';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerService } from './customers/customer.service';
import { OrderService } from './orders/order.service';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        HttpModule
    ],
    declarations: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent
    ],
    entryComponents: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent
    ],
    providers: [
        CustomerService,
        OrderService
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule){

    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [moduleName], {strictDi: true});
    }
}