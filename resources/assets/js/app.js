require('angular');
require('angular-route');

var app = angular.module('lumen-angular', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : '/templates/home.html',
        controller  : 'mainController'
    });
    $routeProvider.otherwise('/');
});

app.controller('mainController', function ($scope, ApiService) {
	$scope.users = [];
	ApiService.getUsers().then(function (response) {
		$scope.users = response.data;
	});

});

app.service('ApiService', function ($http) {
	this.getUsers = function () {
		return $http.get('/api/users');
	};
});