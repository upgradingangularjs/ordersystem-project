(function(){
    'use strict';

    var customersComponent = {
        templateUrl: './customers/customers.html',
        bindings: {},
        controller: customersComponentController
    };

    customersComponentController.$inject = ['customerService', ];
    function customersComponentController(customerService){
        var vm = this;
        vm.title = 'Customers';

        vm.$onInit = function(){
            vm.customers = customerService.getCustomers();
        };
    }

    angular.module('app').component('customers', customersComponent);
})();