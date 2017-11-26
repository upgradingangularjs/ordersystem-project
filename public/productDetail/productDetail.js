(function(){
    'use strict';

    var productDetailComponent = {
        templateUrl: './productDetail/productDetail.html',
        bindings: {
            product: '<'
        },
        controller: productDetailComponentController
    };

    function productDetailComponentController(){
        var vm = this;
        vm.title = 'Product Detail';
        vm.product = this.product;
    }

    angular.module('app').component('productDetail', productDetailComponent);
})();