# Intro to Angular Challenges

| Objectives |
| :--- |
| Start an Angular 1.4 app with `ng-app` |
| Setup a two way data binding with `ng-model` |
| Display a list with `ng-repeat` |
| Manipulate the DOM with `$scope` |

## Background

Angular is an opinionated yet flexible front end framework made for building robust single page web applications. It is written in JavaScript and created and maintained by Google.

## View Controllers

Angular is very modular and lets you add controllers to your views. Tomorrow we'll learn Angular Routing where we will learn how to map controllers to views and urls.

1. Create an `index.html` and an `app.js` file in a new folder.
1. In `index.html` put this template:

  ```html
  <!doctype html>
  <html ng-app>
  <head>
    <title>My Angular App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
  </head>
  <body>

    <input type="text" ng-model="term" />
    <p>{{term}}</p>

  </body>
  </html>
  ```

1. In `app.js` initialize an angular app called `starter`
  ```js
  angular.module('starter', [])
  ```
2. Now connect this script to your `index.html` and set `starter` to be the value of your `ng-app` directive. Check that everything works the same. Now you've linked your angular code to your template through `ng-app`.

  ```html
  <html ng-app="starter">
  <head>
    <title>My Angular App</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="app.js"></script>
  </head>
  ...
  ```

3. Now add a controller to your `app.js` and connect it to your `<body>` tag with the directive `ng-controller`. We'll set a value of `$scope.term` to make sure that the controller is working.

  ```js
  angular.module('starter', [])
    .controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
      $scope.term = "cellar door"
    }])
  ```

  ```html
  <body ng-controller="MainCtrl">
  ```

## Adding a function to $scope

`$scope` reflects the state of data, but it also holds functions that can fire to query an API, change the DOM, or filter or change the model. Let's add a simple function to `$scope`.

1.  Add a button to your page and add the `ng-click` directive attribute to attach a click event activated function. Let's pass in the function as the value of the attribute: `showAlert()`.

  ```html
  <button ng-click="showAlert()">Alert</button>
  ```

2. Now in our `MainCtrl`, let's add this function to `$scope` and have it create an alert with the value of `$scope.term`

  ```js
  angular.module('starter', [])
  .controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.term = "cellar door"
    $scope.showAlert = function() {
      alert($scope.term);
    }
  }])
  ```
3. Try out your new function.

## Base Challenges

1. Add bootstrap using the CDN. Using the bootstrap grid put your list of todos in the center third of the page.
1. Inside the <body> create a <div> element and attach an Angular controller called `TodoCtrl`. (you guessed it! a todo app!)
2. Create this TodoCtrl in your `app.js` by dot-chaining it to the end of the `MainCtrl`.
3. Write a console log in the controller to make sure its working.
4. Assign an array of simple todo objects with the attribute "title" to `$scope.todos`.
5. Use `<li ng-repeat="todo in todos">{{todo.title}}</li>` to display the list of todos.
6. Above the list create an input field and use `ng-model` to bind the field to a variable in `$scope` called `todo.title`.
7. Make a button that has a click function that takes the `$scope.todo` and pushes it on to the `$scope.todos` array. After pushing the new todo, set `$scope.todo.title` to "".
9. Display a counter of how many todos you have.

## Evening Challenges

1. Make a button on each todo that deletes that todo from the array of todos. Add underscore and use the `_.findWhere()` function to find the todo where the title is equal to the title clicked. (Remember that to access the clicked element use the reserved word `this`)
1.


## Extra Challenges

1. Write a blog in AngularJS. It should have posts and the posts should have comments. (hint use `post.comments.push($scope.comment)` to push a comment into a comments attribute).
