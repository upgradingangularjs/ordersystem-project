import { Component } from '@angular/core';

@Component({
    selector: 'ordersystem-app',
    template: `
    <navigation></navigation>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {}