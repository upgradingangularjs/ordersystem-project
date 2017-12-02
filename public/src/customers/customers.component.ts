import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from './customer.service';
import { Customer } from './customer.interface';

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