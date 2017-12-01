import { Component } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
declare var angular: angular.IAngularStatic;

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

angular.module('app')
    .directive('home', 
    downgradeComponent({component: HomeComponent}) as angular.IDirectiveFactory
);