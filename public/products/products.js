(function(){
    'use strict';

    var productsComponent = {
        templateUrl: './products/products.html',
        bindings: {},
        controller: productsComponentController
    };

    productsComponentController.$inject = ['productService', ];
    function productsComponentController(productService){
        var vm = this;
        vm.title = 'Products';

        vm.$onInit = function(){
            vm.products = productService.getProducts();
        };
    }

    angular.module('app').component('products', productsComponent);
})();