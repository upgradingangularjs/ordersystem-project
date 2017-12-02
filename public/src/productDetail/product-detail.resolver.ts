import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Product } from '../products/product.interface';
import { ProductService } from '../products/product.service';

@Injectable()
export class ProductDetailResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        let id = route.paramMap.get('productId');

        return this.productService.getProduct(id).take(1).map(product => {
            if (product) {
                return product;
            } else {
                this.router.navigate(['/products']);
                return null;
            }
        });
    }
}