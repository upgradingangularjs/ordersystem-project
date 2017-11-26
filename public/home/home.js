(function(){
    'use strict';

    var homeComponent = {
        templateUrl: './home/home.html',
        bindings: {},
        controller: homeComponentController
    };

    function homeComponentController(){
        var vm = this;
        vm.title = 'Awesome, Inc. Internal Ordering System';
    }

    angular.module('app').component('home', homeComponent);
})();