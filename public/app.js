angular.module('app', ['ngRoute']);

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);