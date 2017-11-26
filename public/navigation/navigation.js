(function(){
    'use strict';

    var navigationComponent = {
        templateUrl: '../navigation/navigation.html',
        bindings: {},
        controller: navigationComponentController
    };

    function navigationComponentController(){
        var vm = this;
        vm.companyName = 'Awesome, Inc.';
    }

    angular.module('app')
        .component('navigation', navigationComponent);
})();