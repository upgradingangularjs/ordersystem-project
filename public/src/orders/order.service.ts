import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Order } from './order.interface';

@Injectable()
export class OrderService{
    constructor(private http: Http) {
        this.http = http;
    }

    getOrders(): Promise<Order[]>{
        return this.http.get('/api/orders')
            .toPromise()
            .then((response) => response.json());
    }

    getOrder(id): Observable<Order>{
        return this.http.get(`/api/orders/${id}`)
            .map((response) => response.json());
    }

    getOrdersByCustomer(customerId): Promise<Order[]>{
        return this.http.get(`/api/customers/${customerId}/orders`)
            .toPromise()
            .then((response) => response.json());
    }

    postOrder(order): Observable<Order>{
        return this.http.post('/api/orders', order)
            .map((response) => response.json());
    }
}