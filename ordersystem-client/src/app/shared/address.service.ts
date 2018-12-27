import { Injectable } from '@angular/core';

@Injectable()
export class AddressService {
  constructor() {

  }

  getFullAddress(customer) {
    var address2 = customer.address2 != null ? customer.address2 + ', ' : '';
    return customer.address1 + ', ' + address2 + customer.city + ", " + customer.state + " " + customer.zip;
  }
}