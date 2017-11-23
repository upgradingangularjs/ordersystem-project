angular.module('app')
    .directive('navigation', function(){
        return {
            restrict: 'E',
            templateUrl: '../navigation/navigation.html',
            link: function(scope, element, attrs, ctrl){
            }
        }
    })