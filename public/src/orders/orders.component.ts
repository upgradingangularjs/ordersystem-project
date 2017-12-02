import { Component, OnInit, Inject } from '@angular/core';

import * as _ from 'lodash';
import { CustomerService } from '../customers/customer.service';
import { Customer } from '../customers/customer.interface';
import { OrderService } from './order.service';
import { Order } from './order.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

@Component({
    selector: 'orders',
    templateUrl: './orders.html',
    styles: ['tr a { cursor: pointer; }']
})
export class OrdersComponent implements OnInit {
    customers: Customer[];
    orders: Order[];
    filteredOrders: Order[];
    title = 'Orders';

    sortType: string;
    sortReverse: boolean = false;

    constructor(private orderService: OrderService, private customerService: CustomerService,
        @Inject('$location') private $location) {

    }

    ngOnInit(): void {
        let ordersData = Observable.fromPromise(this.orderService.getOrders());
        Observable.forkJoin([ordersData, this.customerService.getCustomers()]).subscribe((data: Order[][] | Customer[][]) => {
            this.orders = data[0] as Order[];
            this.customers = data[1] as Customer[];
            this.orders.forEach((order) => {
                var customer = _.find(this.customers, (customer) => {
                    return order.customerId === customer.id;
                });
                order.customerName = customer.fullName;
            });

            this.filteredOrders = this.orders;
            this.sortOrders('id');
        });
    }

    //I again used arrow syntax in the videos for the below functions,
    //which you shouldn't do because they transpile differently.
    //Everything else is exactly the same.
    goToCreateOrder() {
        this.$location.path("/orders/create");
    };

    sortOrders(property) {
        this.sortType = property;
        this.sortReverse = !this.sortReverse;
        this.filteredOrders.sort(this.dynamicSort(property));
    }

    dynamicSort(property) {
        let sortOrder = -1;

        if (this.sortReverse)
            sortOrder = 1;

        return function (a, b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

            return result * sortOrder;
        }
    }

    filterOrders(search: string) {
        this.filteredOrders = this.orders.filter(o =>
            Object.keys(o).some(k => {
                if (typeof o[k] === 'string')
                    return o[k].toLowerCase().includes(search.toLowerCase());
            }));
    }
}