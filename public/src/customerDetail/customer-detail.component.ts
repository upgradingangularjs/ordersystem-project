import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Customer } from '../customers/customer.interface';
import { OrderService } from '../orders/order.service';
import AddressService from '../shared/addressService';

import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./customerDetail.html');

@Component({
    selector: 'customer-detail',
    template: template
})
export class CustomerDetailComponent implements OnInit {
    @Input() customer: Customer;
    title = 'Customer Detail';
    address: string;
    orders: any[];

    constructor(private addressService: AddressService, private orderService: OrderService){

    }
    
    ngOnInit() {
        this.address = this.addressService.getFullAddress(this.customer);
        return this.orderService.getOrdersByCustomer(this.customer.id)
            .then((data) => {
                this.orders = data;
                this.orders.forEach((order) => {
                    order.orderDate = moment(order.orderDate).format("MM/DD/YYYY");
                });
            });
    }

    updateDiscount(discount) {
        this.customer.discount = discount;
    };
}

angular.module('app')
    .directive('customerDetail', downgradeComponent({component: CustomerDetailComponent}) as 
    angular.IDirectiveFactory    
);