var app = angular.module('MyApp', [
    'ngMaterial',
    'ngNewRouter',
    'MyApp.UserService',
    'MyApp.login',
    'MyApp.register'

]);

app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette("blue")
        .accentPalette("green")
})

app.controller('AppController', ['$router', AppController]);

AppController.$routeConfig = ([
    {path: '/', component: 'login' },
    {path: '/login', component: 'login' },
    {path: '/register', component: 'register' },
]);

function AppController ($router) {}
