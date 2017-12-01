import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { downgradeInjectable } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Customer } from './customer.interface';

@Injectable()
export class CustomerService {
    constructor(private http: Http) {
        this.http = http;
    }

    getCustomers(): Observable<Customer[]> {
        return this.http.get('/api/customers')
            .map((response) => response.json());
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