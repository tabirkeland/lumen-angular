require('angular');
require('angular-route');
window.jQuery = window.$ = require('jquery');
require('bootstrap');
var app = angular.module('lumen-angular', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : '/templates/home.html',
        controller  : 'mainController'
    });
    $routeProvider.otherwise('/');
});

app.controller('mainController', function ($scope, ApiService) {
	$scope.formData = {};

	$scope.users = [];
	ApiService.getUsers().then(function (response) {
		$scope.users = response.data;
	});

	$scope.saveUser = function () {
		if ($scope.formData.name && $scope.formData.address) {
			$scope.users.push($scope.formData);
			$scope.formData = {};
		}
	};
});

app.service('ApiService', function ($http) {
	this.getUsers = function () {
		return $http.get('/api/users');
	};
});