import homeComponent from './home/home';

angular.module('app', ['ngRoute'])
  .component('home', homeComponent);

angular.module('app').config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);