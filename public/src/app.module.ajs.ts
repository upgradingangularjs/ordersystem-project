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
import navigationComponent from './navigation/navigation';
import { discountComponent } from './customerDetail/discount';
import validateDateDirective from './directives/validateDate';
import orderDetailComponent from './orderDetail/orderDetail';
import productsComponent from './products/products';
import productDetailComponent from './productDetail/productDetail';
import { AddressService } from './shared/addressService';
import { ProductService } from './products/productService';

//ngUpgrade
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';

export const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('navigation', navigationComponent)
  .component('discount', discountComponent)
  .component('orderDetail', orderDetailComponent)
  .component('products', productsComponent)
  .component('productDetail', productDetailComponent)
  .directive('validateDate', validateDateDirective)
  .service('addressService', AddressService)
  .service('productService', ProductService)
  .directive('createOrder', downgradeComponent({ component: CreateOrderComponent }) as angular.IDirectiveFactory)
  .directive('customerDetail', downgradeComponent({ component: CustomerDetailComponent }) as angular.IDirectiveFactory)
  .directive('customersTable', downgradeComponent({ component: CustomersTableComponent }) as angular.IDirectiveFactory)
  .directive('customers', downgradeComponent({component: CustomersComponent}) as angular.IDirectiveFactory)
  .directive('home', downgradeComponent({component: HomeComponent}) as angular.IDirectiveFactory)
  .directive('orders', downgradeComponent({ component: OrdersComponent }) as angular.IDirectiveFactory)
  .factory('customerService', downgradeInjectable(CustomerService))
  .factory('orderService', downgradeInjectable(OrderService));