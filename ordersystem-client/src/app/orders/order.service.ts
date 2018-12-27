import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Order } from './order.interface';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Promise<Order[]> {
    return this.http
      .get<Order[]>('/api/orders')
      .toPromise()
      .then(response => response);
  }

  getOrder(id): Observable<Order> {
    return this.http.get<Order>(`/api/orders/${id}`);
  }

  getOrdersByCustomer(customerId): Promise<Order[]> {
    return this.http
      .get<Order[]>(`/api/customers/${customerId}/orders`)
      .toPromise()
      .then(response => response);
  }

  postOrder(order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order);
  }
}
