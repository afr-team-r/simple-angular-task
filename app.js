var app = angular.module('myApp', []);

app.controller('myController',['$scope', function($scope) {

	$scope.todos = [
					{text: 'Aprender AJS', done: false}, 
					{text: 'Treinar', done: false}
				   ];

    $scope.todosLength = function() {
		return $scope.todos.length;
	};
	
	$scope.addTask = function() {
		$scope.todos.push({text: $scope.task, done: false});
		$scope.task = '';
	};
	
	$scope.removeTasks = function() {
		
		for(task in $scope.todos)
			if($scope.todos[task].done)
				$scope.todos.splice(task, 1);
		
	};

}]);