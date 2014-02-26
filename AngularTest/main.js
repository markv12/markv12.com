var myApp = angular.module("myApp", []);
myApp.factory("Data", function() {
	return {message: "I'm data from a service!"}
})

function controllerOne($scope, Data){
	$scope.data = Data;
}

function controllerTwo($scope, Data){
	$scope.data = Data;
}