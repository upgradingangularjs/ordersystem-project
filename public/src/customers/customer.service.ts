import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { downgradeInjectable } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {
    constructor(private http: Http) {
        this.http = http;
    }

    getCustomers(): Promise<any> {
        return this.http.get('/api/customers')
            .toPromise()
            .then((response) => response.json());
    }

    getCustomer(id): Promise<any> {
        return this.http.get(`/api/customers/${id}`)
            .toPromise()
            .then((response) => response.json());
    }

    postCustomer(customer): Promise<any> {
        return this.http.post('/api/customers', customer)
            .toPromise()
            .then((data) => data);
    }
}

angular.module('app')
    .factory('customerService', downgradeInjectable(CustomerService));