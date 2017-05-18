
    /**
     * Created by ibm on 5/11/2017.
     */
    angular.module('app.login', [
        'ngRoute'
    ]).config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/login',{
                templateUrl:'../view/login.html',
                controller:'LoginCtrl'
            });
        }]).controller('LoginCtrl',['$scope',function($scope){

        $scope.login=function(e){
            console.log('submit');
        }//the directive in html should be lower case so!!!!!!!!!!!!!!!!!!!!!! wrong name will not have effect!!!!!!!!!!!
    }]).directive('myValidation',function(){
        return {
            require:'ngModel',
            restrict:'A',
            link:function(scope,elm,attrs,ctrl){
                ctrl.$validators.myValidation=function(modelValue, viewValue){
                    console.log(typeof modelValue);
                    if(modelValue!=undefined&&modelValue.length>5){
                        return true;
                    }
                    return false;
                }
            }

        };
    }).directive('myEmail',function(){
        return {
            require:'ngModel',
            restrict:'A',
            link:function(scope,elm,attrs,ctrl){
                ctrl.$validators.myEmail=function(modelValue, viewValue){
                    //console.log(typeof modelValue);
                    // complex match should use reg expression
                    if(modelValue!=undefined&&modelValue.length>0){
                        if(modelValue.indexOf('@')>=1){
                            return true;
                        }

                    }
                    return false;
                }
            }

        };
    });


