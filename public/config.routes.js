angular.module('app')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : './home/home.html',
            controller  : 'homeController'
        }).when('/customers', {
            template: '<customers></customers>'
        }).when('/orders', {
            templateUrl : './orders/orders.html',
            controller  : 'ordersController'
        }).when('/products', {
            templateUrl : './products/products.html',
            controller  : 'productsController'
        }).when('/customers/:id', {
            template: '<customer-detail customer="$resolve.customer"></customer-detail>',
            resolve: {
                customer: [
                    '$route', 'customerService', function ($route, customerService) {
                        var id = parseInt($route.current.params.id);
                        return customerService.getCustomer(id);
                    }
                ]
			}
        }).when('/orders/:id', {
            templateUrl : './orderDetail/orderDetail.html',
            controller  : 'orderDetailController',
            resolve: {
                order: [
                    '$route', 'orderService', function ($route, orderService) {
                        var id = parseInt($route.current.params.id);
                        return orderService.getOrder(id);
                    }
                ]
            }
        }).when('/products/:id', {
            templateUrl : './productDetail/productDetail.html',
            controller  : 'productDetailController',
            resolve: {
                product: [
                    '$route', 'productService', function ($route, productService) {
                        var id = parseInt($route.current.params.id);
                        return productService.getProduct(id);
                    }
                ]
            }
        });
    }]);