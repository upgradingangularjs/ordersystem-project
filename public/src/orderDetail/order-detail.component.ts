import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Customer } from '../customers/customer.interface';
import { CustomerService } from '../customers/customer.service';
import { ProductService } from '../products/product.service';

@Component({
    selector: 'order-detail',
    templateUrl: './orderDetail.html'
})
export class OrderDetailComponent implements OnInit {
    title = 'Order Detail';
    customer: Customer;
    @Input() order: any;
    dataLoaded: boolean = false;

    constructor(private productService: ProductService, private customerService: CustomerService) { }

    ngOnInit() {
        Observable.forkJoin([this.productService.getProducts(), this.customerService.getCustomer(this.order.customerId)]).subscribe((data) => {
            var products = data[0];
            this.customer = data[1] as Customer;
            this.order.items.forEach(function (item) {
                var product = _.find(products, function (product) {
                    return product.id === item.productId;
                })
                item.productName = product.name;
                item.itemPrice = item.quantity * product.price;
            });
            this.dataLoaded = true;
        });
    };
}