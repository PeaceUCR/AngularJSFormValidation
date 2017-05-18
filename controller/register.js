/**
 * Created by ibm on 5/11/2017.
 */
angular.module('app.register', [
    'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register',{
        templateUrl:'../view/register.html',
        controller:'RegisterCtrl'
    });
}]).controller('RegisterCtrl',['$scope',function($scope){
    console.log('Register');
}]);
