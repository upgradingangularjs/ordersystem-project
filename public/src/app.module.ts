import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MODULE_NAME } from './app.module.ajs';

import { locationServiceProvider } from './ajs.upgradedproviders';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountComponent } from './customerDetail/discount.component';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { ProductService } from './products/product.service';
import { AddressService } from './shared/address.service';

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
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent
    ],
    entryComponents: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent
    ],
    providers: [
        CustomerService,
        OrderService,
        locationServiceProvider,
        ProductService,
        AddressService
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule){

    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {strictDi: true});
    }
}