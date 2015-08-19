# Intro to AngularJS

"AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write."
> References: [Angular Docs](https://docs.angularjs.org/guide/introduction)

## Readings

Read the [Introductory docs for Angular]( https://docs.angularjs.org/guide/introduction) and answer the following questions:

1. How does Angular differ from jQuery in how it keeps track of state and manipulates the DOM?
2. What is a two way data binding exactly and how would you use it?
3. What does it mean to have a controller attached to a piece of a view?
4. How does Angular make it easier to make full featured Single Page Applications?
5. What is "dependency injection" in Angular?

Read this [Introduction to $scope](https://docs.angularjs.org/guide/scope) From the top through the **Scope Life Cycle** section and answer these questions:

1. What is `$scope`? How will you use it in AngularJS?
2. What is the relationship between any $scope and $rootScope?
3. What is the relationship between the $scope and the DOM?


# Challenge

## Data Bindings

Through data binding, Angular makes the UI of single page applications multiple times less complex. In order to understand data bindings its best to just set one up. Please follow along and make the most basic angular app you can:

1. Create the two root files of any AngularJS app in a new folder: `index.html` and `app.js`
2. For now, ignore `app.js`. In `index.html` add the below code that 1. adds angular to an html file, 2. puts an input field but add the "directive" `ng-model` which connects the input field's value to the AngularJS data model called `$scope`, and 3. binds this model to with the `{{}}` notation.
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
2. `sudo npm install http-server -g` and call `http-server` - now open `http://localhost:8080` in your browser
3. Type in the input. What do you see?

This is a two way data binding. As you type, you update `$scope` Angular's data model. Every time the model is updated, Angular updates the views to match the new state of the model. This is called Angular's **Digest Cycle**. In jQuery this would be like having a `change()` listener on every element and a function that updates the DOM, something like this but for every element:

```js
  $('input').change(function() {
    $('#term').text($(this).val());
  });
```
