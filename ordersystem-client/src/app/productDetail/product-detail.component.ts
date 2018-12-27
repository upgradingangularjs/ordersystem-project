import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products/product.interface';

@Component({
    selector: 'product-detail',
    templateUrl: './productDetail.html'
})
export class ProductDetailComponent implements OnInit {
    title = 'Product Detail';
    product: Product;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe((data: { product: Product }) => {
            this.product = data.product;
        });
    }
}