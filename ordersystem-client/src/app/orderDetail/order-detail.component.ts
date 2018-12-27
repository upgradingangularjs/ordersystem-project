import { forkJoin as observableForkJoin } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { Order } from '../orders/order.interface';
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
  order: Order;
  dataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { order: Order }) => {
      this.order = data.order;
    });

    observableForkJoin([
      this.productService.getProducts(),
      this.customerService.getCustomer(this.order.customerId)
    ]).subscribe(data => {
      var products = data[0];
      this.customer = data[1] as Customer;
      this.order.items.forEach(function(item) {
        var product = _.find(products, function(product) {
          return product.id === item.productId;
        });
        item.productName = product.name;
        item.itemPrice = item.quantity * product.price;
      });
      this.dataLoaded = true;
    });
  }
}
