import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('/api/products')
            .map((response) => response.json());
    }

    getProduct(id) {
        return this.http.get(`/api/products/${id}`)
            .toPromise()
            .then((response) => response.json());
    }

    postProduct(product) {
        return this.http.post('/api/products', product)
            .toPromise()
            .then((response) => response.json());
    }
}