# Angular Routing Challenges

> The Angular Routing tutorial lives [here](http://ajbraus.gitbooks.io/wdi-homework/content/angular-routing.html)

| Objectives |
| :--- |
| Add multiple views to the todo app you created this morning using `ng-route` with route-specific view templates and controllers. |
| Create a restful routing for a resource |
| Negotiate nested resources in AngularJS |

## Base Challenges

**Objective 1: Add multiple views to your todo app using `ng-route`**
1. Add a navbar to your layout template (`index.html`) that will navigate between your home page and your new programming page. Use `ng-href` to make links to your other pages.
1. Add another route to the URL `/about-us` with a template `about-us.html` and just put your name in the template. Don't include a controller for this page because it is static.

**Objective 2: Create a restful routing for a resource**
1. Add another route to list index. (hint `/lists`, `list-index.html`, `ListIndexCtrl`). This route will show all your "lists of todos" like "household", "cleaning", "work", "family", etc.
1. Add a "new list" button that goes to a `/lists/new` route with a form that creates a new list. After it creates the list, use `$location.path('/lists/' + $scope.list.name)` to redirect to a list show route.
1. Add a route to `/lists/:list_name` and link it to a `ListShowCtrl`. Put a console log in the controller and navigate to '/cleaning'.
1. Now `console.log` the `$routeParams.list_name` and see it console log "cleaning".
1. Return all the todos with a list of "cleaning" from your array of todos.

## Stretch Challenges

**Objective 3: Negotiate nested resources in AngularJS**
1. On the '/lists' page, show a count of all the todos in each list.
1. Be able to make todos on each list.
1. Add a button on each todo that marks a todo as completed.
1. Add a way to show only completed (checked) todos and only active (unchecked) todos. (hint use a filter)
1. Inside the list add a button that marks all todos as done.
1. Add a button to delete all completed todos.

**Bonus Challenge** 
1. Use the bootstrap modal to create sign up and login modals (make sure these are narrow modals! not wide ones). Have the login and signup buttons and modals live in the MainCtrl. Put the `login` and `signup` functions in the `$scope` of the `MainCtrl`. That will give you the access to these modals and functions in all views. Have the signup and login functions just console log a `$scope.user` with email and password object you would send to the server.
