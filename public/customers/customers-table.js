(function(){
    'use strict';

    var customersTableComponent = {
        templateUrl: './customers/customers-table.html',
        bindings: {
            customers: '<'
        },
        controller: customersTableComponentController
    };

    function customersTableComponentController(){
        var vm = this;
    }

    angular.module('app').component('customersTable', customersTableComponent);
})();