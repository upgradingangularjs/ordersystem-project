(function () {
    'use strict'

    orderService.$inject = ['$http'];

    function orderService($http) {
        function getOrders() {
            return orders();
        }

        function getOrder(id) {
            return _.find(orders(), function (o) {
                return o.id === id;
            });
        }

        function getOrdersByCustomer(customerId) {
            return orders().filter(function (o) {
                return o.customerId === customerId;
            });
        }

        function postOrder(order) {
            return $http.post('/api/orders', order)
                .then(function (data) {
                    return data;
                });
        }

        return {
            getOrders: getOrders,
            getOrder: getOrder,
            getOrdersByCustomer: getOrdersByCustomer,
            postOrder: postOrder
        }
    };

    angular.module('app')
        .service('orderService', orderService);
})();

//Sample data
function orders() {
    return [
        {
            id: 1,
            orderDate: '2017-06-25T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 15.00,
            totalSale: 15.00,
            totalItems: 3,
            items: [
                {
                    quantity: 2,
                    productId: 1
                },
                {
                    quantity: 1,
                    productId: 4
                }
            ]
        },
        {
            id: 2,
            orderDate: '2017-06-29T00:30:43.16-07:00',
            customerId: 1,
            totalCost: 10,
            totalSale: 9,
            totalItems: 4,
            items: [
                {
                    quantity: 2,
                    productId: 2
                },
                {
                    quantity: 2,
                    productId: 3
                }
            ]
        },
        {
            id: 3,
            orderDate: '2017-07-04T00:30:43.16-07:00',
            customerId: 3,
            totalCost: 5,
            totalSale: 4.75,
            totalItems: 2,
            items: [
                {
                    quantity: 2,
                    productId: 1
                }
            ]
        },
        {
            id: 4,
            orderDate: '2017-08-04T00:30:43.16-07:00',
            customerId: 2,
            totalCost: 25,
            totalSale: 25,
            totalItems: 10,
            items: [
                {
                    quantity: 10,
                    productId: 2
                }
            ]
        }
    ];
}