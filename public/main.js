angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.services'
]);

angular.module('MyApp.controllers', []).
    controller('FirstController', ['$scope', 'FirstService', function($scope, firstService) {
        $scope.count = firstService.get(1, function(data){
            $scope.count = data;
        });
    }]);

angular.module('MyApp.services', []).
    service('FirstService', ['$http', '$location', function($http, $location){
        this.get = function(id, callback){
            $http.get('/api/' + id).success(function(data){
                console.log('success');
                callback(data.val);
            }).error(function(data){
                console.log('failure');
                callback(0);
            });
        }
    }]);