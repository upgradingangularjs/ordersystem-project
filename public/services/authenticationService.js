//We don't need or use this authentication service,
//it's just here to illustrate shared services.
(function () {
    'use strict';

    function authenticationService() {
        function authenticate() {
            return true;
        }

        return {
            authenticate: authenticate
        }
    };

    angular.module('app')
        .service('authenticationService', authenticationService);
})();