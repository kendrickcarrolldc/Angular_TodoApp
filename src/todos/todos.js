export default function ($scope) {
	let params = {
		createHasInput: false
	};

	$scope.todos = [
		{
			task: 'do dishes',
			isCompleted: false,
			isEditing: false
		},
		{
			task: 'walk the dog',
			isCompleted: true,
			isEditing: false
		}
	];

	$scope.onCompletedClick = todo => {
		todo.isCompleted = !todo.isCompleted;
	};
//edit button functionality
	$scope.onEditClick = todo => {
		todo.isEditing = true;
		todo.updatedTask = todo.task;
		};
	
	$scope.onCancelClick = todo => {
		todo.isEditing = false;
	}
		// Resets input form with the ng-submit functionality	
	$scope.createTask = () => {
		params.createHasInput = false;
		$scope.createTaskInput = '';
	};
	
	$scope.updateTask = todo => {
		todo.task = todo.updatedTask;
		todo.isEditing = false;
	}

	$scope.$watch('createTaskInput', val => {
		if (!val && params.createHasInput) {
			$scope.todos.pop();
			params.createHasInput = false;
		} else if (val && !params.createHasInput) {
			$scope.todos.push({
				task: val,
				isCompleted: false
			});
			params.createHasInput = true;
		} else if (val && params.createHasInput) {
			$scope.todos[$scope.todos.length - 1].task = val
		}

	});
}