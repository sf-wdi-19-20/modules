angular.module('toDoApp', [])
	.controller('MainCtrl', ['$scope', function($scope){
		console.log("inside main controller")
		$scope.todos = [
			{title: 'practice angular', kind: 'work', created_at: 1440392214138, completed: false},
			{title: 'buy real food', kind: 'health', created_at: 1440291414138, completed: true},
			{title: 'hit the gym', kind: 'health', created_at: 1440182814138, completed: false}
		];
		$scope.kinds = ['work', 'health'];
		$scope.newFormData = {};
		$scope.createToDo = function(){
			var newToDo = {
				title: $scope.newFormData.title, 
				kind: $scope.newFormData.newKind, 
				created_at: Date.now()
			};
			$scope.todos.push(newToDo);
		}
		$scope.deleteToDo = function(todo){
			var i = $scope.todos.indexOf(todo);
			$scope.todos.splice(i,1);
		}
		$scope.completeToDo = function(todo){
			todo.completed=true;
		}
	}]);