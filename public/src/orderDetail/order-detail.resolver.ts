import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Order } from '../orders/order.interface';
import { OrderService } from '../orders/order.service';

@Injectable()
export class OrderDetailResolver implements Resolve<Order> {
    constructor(private orderService: OrderService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {
        let id = route.paramMap.get('orderId');

        return this.orderService.getOrder(id).take(1).map(order => {
            if (order) {
                return order;
            } else {
                this.router.navigate(['/orders']);
                return null;
            }
        });
    }
}