/**
 * Created by ibm on 2017/4/24.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute',
    'app.login',
    'app.register'
]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);
