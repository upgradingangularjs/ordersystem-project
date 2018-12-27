import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Customer } from '../customers/customer.interface';
import { CustomerService } from '../customers/customer.service';

@Injectable()
export class CustomerDetailResolver implements Resolve<Customer> {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer> {
    let id = route.paramMap.get('customerId');

    return this.customerService.getCustomer(id).pipe(
      take(1),
      map(customer => {
        if (customer) {
          return customer;
        } else {
          this.router.navigate(['/customers']);
          return null;
        }
      })
    );
  }
}
