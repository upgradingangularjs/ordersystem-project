angular.module('app').controller('productsController', ['$scope', 'productService', function($scope, productService){
    $scope.title = 'Products';

    activate();

    function activate(){
        $scope.products = productService.getProducts();
    }
}]);