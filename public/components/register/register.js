var userControllerPath = '/api/users/'

var module = angular.module('MyApp.register', [
    'MyApp.UserService',
]);

module.controller('RegisterController', ['$rootScope', '$location', 'userService',
    function($rootScope, $location, userService){
        var register = this;
        register.username = "";
        register.password = "";
        $rootScope.user = null;
        register.register = function(username, password){
            userService.register(username, password, function(data){
                $location.path("login");
            });
        }
    }]);