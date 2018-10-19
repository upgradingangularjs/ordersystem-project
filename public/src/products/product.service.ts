import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('/api/products');
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }

  postProduct(product) {
    return this.http
      .post('/api/products', product)
      .toPromise()
      .then(response => response);
  }
}
