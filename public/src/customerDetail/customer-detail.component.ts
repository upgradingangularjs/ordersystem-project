import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Customer } from '../customers/customer.interface';
import { OrderService } from '../orders/order.service';
import { AddressService } from '../shared/addressService';

@Component({
    selector: 'customer-detail',
    templateUrl: './customerDetail.html'
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

    updateDiscount($event) {
        this.customer.discount = $event.discount;
    };
}