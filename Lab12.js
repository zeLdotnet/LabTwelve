var app = angular.module("toDo", []);

app.controller("toDoController", function($scope){
	$scope.list = ['dishes', 'mow lawn'];

	$scope.addTo = function (task){
		$scope.list.push(task);
		clear();
	};

	function clear(){
		$scope.taskList = "";
		// this function sets 'ng-model="taskList"' 
		// in the index.html file (view) to an 
		// empty string. When it is called in 
		// $scope.addTo, 'clear();' will empty the
		// input form each time a task is submitted.
	};

});