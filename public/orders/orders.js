(function(){
    'use strict';

    var ordersComponent = {
        templateUrl: './orders/orders.html',
        bindings: {},
        controller: ordersComponentController
    };

    ordersComponentController.$inject = ['orderService', 'customerService'];
    function ordersComponentController(orderService, customerService) {
        var vm = this;
        vm.title = 'Orders';

        vm.$onInit = function() {
            vm.customers = customerService.getCustomers();
            vm.orders = orderService.getOrders();
            vm.orders.forEach(function (order) {
                var customer = _.find(vm.customers, function (customer) {
                    return order.customerId === customer.id;
                });
                order.customerName = customer.fullName;
            });
        };
    }

    angular.module('app').component('orders', ordersComponent);
})();