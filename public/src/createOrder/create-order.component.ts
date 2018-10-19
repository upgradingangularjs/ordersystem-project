import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin as observableForkJoin } from 'rxjs';

import { CustomerService } from '../customers/customer.service';
import { OrderService } from '../orders/order.service';
import { ProductService } from '../products/product.service';

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

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    observableForkJoin([
      this.productService.getProducts(),
      this.customerService.getCustomers()
    ]).subscribe(data => {
      this.products = data[0] as any[];
      this.customers = data[1] as any[];
    });
  }

  postOrder() {
    this.newOrder.items = this.newOrder.items.filter(x => x.productId !== null);

    return this.orderService.postOrder(this.newOrder).subscribe(data => {
      this.router.navigate(['/orders']);
    });
  }
}
