(function(){
    'use strict';

    var discountComponent = {
        templateUrl: './customerDetail/discount.html',
        bindings: {
            customerDiscount: '<',
        },
        controller: discountComponentController
    };

    function discountComponentController(){
        var vm = this;
    }

    angular.module('app')
        .component('discount', discountComponent);
})();