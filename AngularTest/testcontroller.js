var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'SimpleController',
				templateURL: 'View1.html'
			})
		.when('/view2',
		{
			controller: 'SimpleController',
			templateURL: 'View2.html'
		})
		.otherwise({redirectTo: '/'});

});


demoApp.controller('SimpleController', function($scope){
	$scope.customers = customers=[
		{name:'Derp Herp', city:'LA'}, 
		{name:'Herp McGerp', city:'San Francisco'}, 
		{name:'Scott Steffes', city:'Hirakata'},
		{name:'Alex Hoyt', city:'Oslo'},
		{name:'Cameron Cook', city:'Minneapolis'},
		{name:'Heather Steffes', city:'Minneapolis'},
		{name:'Joey Orren', city:'Sauk Rapids'}
	];
	
	$scope.addCustomer() = function (){
		$scope.customers.push(
			{
				name:$scope.newCustomer.name,
				city:$scope.newCustomer.city
			}
		);
	};
});

