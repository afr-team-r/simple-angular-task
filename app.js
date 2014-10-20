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
        
       $scope.todos =  _.filter($scope.todos, function(item) {
            return !item.done;
        });
      	
	};

}]);