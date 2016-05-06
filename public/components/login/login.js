var userControllerPath = '/api/users/'

var module = angular.module('MyApp.login', [
    'MyApp.UserService',
    ]);

module.controller('LoginController', ['$rootScope', 'userService',
    function($rootScope, userService){
        var login = this;
        login.username = "";
        login.password = "";
        login.login = function(username, password){
             userService.login(username, password, function(data){
                $rootScope.user = data;
             });
        }
}]);

