import { Component, OnInit, Inject } from '@angular/core';

import * as _ from 'lodash';
import { CustomerService } from '../customers/customer.service';
import { Customer } from '../customers/customer.interface';
import { OrderService } from './order.service';
import { Order } from './order.interface';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./orders.html');

@Component({
    selector: 'orders',
    template: template
})
export class OrdersComponent implements OnInit {
    customers: Customer[];
    orders: Order[];
    title = 'Orders';

    constructor(private orderService: OrderService, private customerService: CustomerService, 
        @Inject('$location') private $location){

    }

    ngOnInit(): void {
        let ordersData = Observable.fromPromise(this.orderService.getOrders());
        Observable.forkJoin([ordersData, this.customerService.getCustomers()]).subscribe((data: Order[][]|Customer[][]) => {
            this.orders = data[0] as Order[];
            this.customers = data[1] as Customer[];
            this.orders.forEach((order) => {
                var customer = _.find(this.customers, (customer) => {
                    return order.customerId === customer.id;
                });
                order.customerName = customer.fullName;
            });
        });
    }

    //In the video I should not have used arrow syntax here.
    goToCreateOrder() {
        this.$location.path("/orders/create");
    };
}

angular.module('app')
    .directive('orders', downgradeComponent({component: OrdersComponent}) as 
    angular.IDirectiveFactory
);