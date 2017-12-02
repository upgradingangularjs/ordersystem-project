import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { CustomerDetailResolver } from './customerDetail/customer-detail.resolver';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderDetailResolver } from './orderDetail/order-detail.resolver';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'customers/:customerId', component: CustomerDetailComponent, resolve: { customer: CustomerDetailResolver } },
    { path: 'orders/create', component: CreateOrderComponent },
    { path: 'orders/:orderId', component: OrderDetailComponent, resolve: { order: OrderDetailResolver }  },
    { path: 'orders', component: OrdersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '!' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CustomerDetailResolver,
        OrderDetailResolver
    ]
})
export class AppRoutingModule { }