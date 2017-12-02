import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-detail',
    templateUrl: './productDetail.html'
})
export class ProductDetailComponent {
    title = 'Product Detail';
    @Input() product: any;
}