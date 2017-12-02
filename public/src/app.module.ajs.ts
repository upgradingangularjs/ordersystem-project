import * as angular from 'angular';
import 'angular-route';
import 'reflect-metadata';

import 'jquery';
import 'lodash';

import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./styles/app.scss";

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';

//ngUpgrade
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

export const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .directive('navigation', downgradeComponent({component: NavigationComponent}) as angular.IDirectiveFactory)
  .directive('discount', downgradeComponent({component: DiscountComponent}) as angular.IDirectiveFactory)
  .directive('orderDetail', downgradeComponent({component: OrderDetailComponent}) as angular.IDirectiveFactory)
  .directive('products', downgradeComponent({component: ProductsComponent}) as angular.IDirectiveFactory)
  .directive('productDetail', downgradeComponent({component: ProductDetailComponent}) as angular.IDirectiveFactory)
  .directive('createOrder', downgradeComponent({ component: CreateOrderComponent }) as angular.IDirectiveFactory)
  .directive('customerDetail', downgradeComponent({ component: CustomerDetailComponent }) as angular.IDirectiveFactory)
  .directive('customersTable', downgradeComponent({ component: CustomersTableComponent }) as angular.IDirectiveFactory)
  .directive('customers', downgradeComponent({component: CustomersComponent}) as angular.IDirectiveFactory)
  .directive('home', downgradeComponent({component: HomeComponent}) as angular.IDirectiveFactory)
  .directive('orders', downgradeComponent({ component: OrdersComponent }) as angular.IDirectiveFactory)
  .factory('customerService', downgradeInjectable(CustomerService))
  .factory('orderService', downgradeInjectable(OrderService))
  .factory('productService', downgradeInjectable(ProductService))
  .factory('addressService', downgradeInjectable(AddressService));