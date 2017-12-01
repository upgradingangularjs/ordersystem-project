export function locationServiceFactory(i: any){
    return i.get('$location');
 }
 
 export const locationServiceProvider = {
    provide: '$location',
    useFactory: locationServiceFactory,
    deps: ['$injector']
 } 