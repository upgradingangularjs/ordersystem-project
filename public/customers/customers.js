angular.module('app').controller('customersController', ['$scope', 'customerService', function($scope, customerService){
    $scope.title = 'Customers';

    activate();

    function activate(){
         $scope.customers = customerService.getCustomers();
    }
}]);