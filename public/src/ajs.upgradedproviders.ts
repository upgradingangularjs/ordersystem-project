import { ProductService } from './products/productService';
import { AddressService } from './shared/addressService';

export function locationServiceFactory(i: any) {
    return i.get('$location');
}

export const locationServiceProvider = {
    provide: '$location',
    useFactory: locationServiceFactory,
    deps: ['$injector']
}

export function productServiceFactory(i: any) {
    return i.get('productService');
}

export const productServiceProvider = {
    provide: ProductService,
    useFactory: productServiceFactory,
    deps: ['$injector']
}

export function addressServiceFactory(i: any) {
    return i.get('addressService');
}

export const addressServiceProvider = {
    provide: AddressService,
    useFactory: addressServiceFactory,
    deps: ['$injector']
}