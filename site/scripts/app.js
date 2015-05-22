var modulo1 = 
	angular.module("reditgam",[]);
	
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		// Modelo
		$scope.posts = 
		[{"Post 1",
		  "Post 2",
		  "Post 3",
		  "Post 4",
		  "Post 5",
		  "Post 6"];

	}]);