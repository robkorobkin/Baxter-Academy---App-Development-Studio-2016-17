


var app = angular.module('baxterApp', []);

app.controller('baxterCtrl', ['$scope',
	function($scope){


		$scope.view = 'home';



		$scope.loadView = function(viewName){

			$scope.view = viewName;



		}


	}
]);

