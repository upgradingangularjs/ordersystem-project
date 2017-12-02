import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Product } from './product.interface';

@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('/api/products')
            .map((response) => response.json());
    }

    getProduct(id): Observable<Product> {
        return this.http.get(`/api/products/${id}`)
            .map((response) => response.json());
    }

    postProduct(product) {
        return this.http.post('/api/products', product)
            .toPromise()
            .then((response) => response.json());
    }
}