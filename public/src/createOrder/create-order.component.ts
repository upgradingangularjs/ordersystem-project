import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from '../customers/customer.service';
import { OrderService } from '../orders/order.service';
import { ProductService } from '../products/productService';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

@Component({
    selector: 'create-order',
    templateUrl: './createOrder.html'
})
export class CreateOrderComponent implements OnInit {
    customers: any[];
    products: any[];
    title = 'Create Order';

    newOrder = {
        customerId: null,
        items: [
            {
                productId: null,
                quantity: null
            },
            {
                productId: null,
                quantity: null
            }
        ]
    };

    constructor(private orderService: OrderService, private customerService: CustomerService, 
        @Inject('$location') private $location, private productService: ProductService){

        }

    ngOnInit(): void {
        let productData = Observable.fromPromise(this.productService.getProducts());
        Observable.forkJoin([productData, this.customerService.getCustomers()]).subscribe((data) => {
            this.products = data[0] as any[];
            this.customers = data[1] as any[];
        });
    }
    
    postOrder() {
        this.newOrder.items = this.newOrder.items.filter(x => x.productId !== null);

        return this.orderService.postOrder(this.newOrder).subscribe((data) => {
            console.log(data.id);
            this.$location.path("/orders");
        });
    };
}