import * as angular from 'angular';
import 'angular-route';

import 'jquery';
import 'lodash';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/app.scss";

import hashPrefixConfig from './config.hashprefix';
import routeProviderConfig from './config.routes';
import homeComponent from './home/home';
import navigationComponent from './navigation/navigation';
import customersComponent from './customers/customers';
import customersTableComponent from './customers/customers-table';
import customerDetailComponent from './customerDetail/customerDetail';
import discountComponent from './customerDetail/discount';
import validateDateDirective from './directives/validateDate';
import ordersComponent from './orders/orders';
import orderDetailComponent from './orderDetail/orderDetail';
import productsComponent from './products/products';
import productDetailComponent from './productDetail/productDetail';
import CustomerService from './customers/customerService';
import AddressService from './shared/addressService';
import OrderService from './orders/orderService';
import ProductService from './products/productService'

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('home', homeComponent)
  .component('navigation', navigationComponent)
  .component('customers', customersComponent)
  .component('customersTable', customersTableComponent)
  .component('customerDetail', customerDetailComponent)
  .component('discount', discountComponent)
  .component('orders', ordersComponent)
  .component('orderDetail', orderDetailComponent)
  .component('products', productsComponent)
  .component('productDetail', productDetailComponent)
  .directive('validateDate', validateDateDirective)
  .service('customerService', CustomerService)
  .service('addressService', AddressService)
  .service('orderService', OrderService)
  .service('productService', ProductService);

  export default MODULE_NAME;