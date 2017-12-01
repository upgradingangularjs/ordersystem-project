import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CustomerService } from './customer.service';
import { Customer } from './customer.interface';

import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

const template = require('./customers.html');

@Component({
    selector: 'customers',
    template: template
})
export class CustomersComponent implements OnInit {
    customers: Customer[];
    title: string = 'Customers';
    constructor(private customerService: CustomerService) {

    }

    ngOnInit(): void {
        this.customerService.getCustomers().subscribe((data) => {
            this.customers = data;
        });
    }
}

angular.module('app')
    .directive('customers', downgradeComponent({component: CustomersComponent}) as
    angular.IDirectiveFactory
);