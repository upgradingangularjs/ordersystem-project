import { Component } from '@angular/core';

const template = require('./home.html');

@Component({
    selector: 'home',
    template: template
})
export class HomeComponent {
    title: string;
    constructor(){
        this.title = 'Awesome, Inc. Internal Ordering System';
    }
}