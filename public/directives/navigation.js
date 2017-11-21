angular.module('app')
    .directive('navigation', function(){
        return {
            restrict: 'E',
            templateUrl: '../templates/navigation.html',
            link: function(scope, element, attrs, ctrl){
            }
        }
    })