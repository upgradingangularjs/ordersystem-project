import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Discount } from './discount.interface';

@Component({
    selector: 'discount',
    templateUrl: './discount.html'
})
export class DiscountComponent {
    @Input() customerDiscount: Discount;
    @Output() update = new EventEmitter<{discount: Discount}>();
    editDiscount = false;
    selectedDiscount: Discount;

    discounts: Discount[] = [
        {
            discountId: 1,
            discountPercent: 10,
            discountName: "Employee"
        },
        {
            discountId: 2,
            discountPercent: 5,
            discountName: "Friends & Family"
        },
        {
            discountId: 3,
            discountPercent: 20,
            discountName: "Famous Drummer"
        }
    ];
    
    editDiscountType(){
        this.editDiscount = true;
    };

    updateDiscountType(){
        this.update.emit({discount: this.selectedDiscount});
        this.editDiscount = false;
    };   
}