(function () {
    'use strict';
    
    productService.$inject = ['$http'];

    function productService($http) {
        function getProducts() {
            return products();
        }

        function getProduct(id) {
            return products().filter(function (p) {
                return p.id === id;
            })[0];
        }

        function postProduct(product) {
            return $http.post('/api/products', product)
                .then(function (data) {
                    return data;
                });
        }

        return {
            getProducts: getProducts,
            getProduct: getProduct,
            postProduct: postProduct
        }
    };

    angular.module('app')
        .service('productService', productService);
})();

//Sample data
function products() {
    return [
        {
            id: 1,
            name: 'Amazing Widget',
            color: 'Red',
            price: 2.5
        },
        {
            id: 2,
            name: 'Incredible Widget',
            color: 'Blue',
            price: 2.5
        },
        {
            id: 3,
            name: 'Fantastic Widget',
            color: 'Yellow',
            price: 2.5
        },
        {
            id: 4,
            name: 'Collectible Widget Tote Bag',
            color: 'Sand',
            price: 10
        }
    ];
}