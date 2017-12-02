import { Component, Input } from '@angular/core';

import { Customer } from './customer.interface';

const template = require('./customers-table.html');

@Component({
    selector: 'customers-table',
    template: template
})
export class CustomersTableComponent {
    @Input() customers: Customer[];
    constructor(){

    }
}