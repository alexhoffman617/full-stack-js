angular.module('MyApp.UserService', []).
    service('userService', ['$http', '$location', function($http){
        this.login = function(username, password, callback){
            $http.get(userControllerPath + username + '/' + password).success(function(data){
                console.log('success');
                callback(data);
            }).error(function(data){
                console.log('failure');
                callback(null);
            });
        }

        this.register = function(username, password, callback){
            $http.post(userControllerPath + username + '/' + password).success(function(data){
                console.log('success');
                callback(data);
            }).error(function(data){
                console.log('failure');
                callback(null);
            });
        }
    }]);