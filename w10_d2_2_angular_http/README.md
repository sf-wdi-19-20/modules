# Angular $http

| Objective |
| :--- |
| Use Angular $http to query an API and CRUD one resource |

The <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">$http</a> service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

## Set Up

$http will be a dependency in your Angular controller, so before including it, make sure you have an Angular app and controller set up.

1. Define your Angular app in `app.js` and include it in the `<html>` tag in `index.html`.

  ```js
  // app.js
  angular.module('exampleApp', []);
  ```

  ```html
  <!-- index.html -->
  <html ng-app="exampleApp">
    <head>
      <title>Example Angular App</title>
      <!-- angular -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js"></script>
      <!-- custom script -->
      <script type="text/javascript" src="app.js"></script>
    </head>
    <body>
      ...
    </body>
  </html>
  ```

2. Define an Angular controller and include the $http dependency. Don't forget to also include the controller in the `<body>` tag in `index.html`.

  ```js
  // app.js
  angular.module('exampleApp', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
      // controller logic
    }]);
  ```

  ```html
  <!-- index.html -->
  <html ng-app="exampleApp">
    <head>
      <title>Example Angular App</title>
      <!-- angular -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular.min.js"></script>
      <!-- custom script -->
      <script type="text/javascript" src="app.js"></script>
    </head>
    <body ng-controller="MainCtrl">
      ...
    </body>
  </html>
  ```

## $http Syntax

#### 1. Long-Form

Similar to jQuery's `$.ajax()`

```js
$http({method: 'GET', url: '/someUrl'})
  .then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status
  });
```

#### 2. Shortcut Methods

Similar to jQuery's `$.get()` and `$.post()`.

```js
// GET request
$http.get('/someUrl')
  .then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

```js
// POST request (passing data)
$http.post('/someUrl', {msg:'hello word!'})
  .then(function(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

Read more about the available shortcut methods in the <a href="https://docs.angularjs.org/api/ng/service/$http/#shortcut-methods" target="_blank">$http docs</a>.

## Challenges

We're going to be using Angular $http and the <a href="https://github.com/arsood/SampleAPI#wines" target="_blank">DareToDiscover API</a> to build a wine discovery app. DareToDiscover is a RESTful API, so its request syntax follows this pattern:

**Base URL:** http://daretodiscover.herokuapp.com

| HTTP Verb | URL | Functionality |
| :--- | :--- | :--- |
| GET | /wines | READS all wines |
| POST | /wines | CREATES new wine |
| GET | /wines/:id | READS one wine |
| PUT | /wines/:id | UPDATES one wine |
| DELETE | /wines/:id | DESTROYS one wine |

----------

1. Open up Postman and make a request to get all wines. Make sure the response is a list of wine objects, and familiarize yourself with how the data is structured.

2. Set up a new Angular project with an `app.js` and an `index.html`.
  * Your `app.js` should have:
    * Angular app defined (`angular.module( ... )`)
  * Your `index.html` should have:
    * Angular CDN
    * `app.js` script
    * `ng-app` in either the `<html>` tag

3. Make a new controller called `winesCtrl` and include `$http` as a dependency. **Hint:** Make sure you add `winesCtrl` to your Angular app in `app.js`, and use `ng-controller` to include it in the `<body>` tag in `index.html`.

4. When a user opens your app, they should see a list of all the wines from DareToDiscover. Display all the wine attributes, including the photo. **Hint:** Look up `ng-src` for images.

5. Make a form to create a new wine. When a user submits the form, it should send an `$http` request to CREATE a new wine in the DareToDiscover database.

6. Each wine in your list should have an edit button. When a user clicks the edit button, the wine information should hide and the edit form should show.

7. When a user submits the edit form, send an `$http` request to UPDATE the wine in the DareToDiscover database.

8. Implement a delete button. When the user clicks it, send an `$http` request to DESTROY the wine from the DareToDiscover database.

## Stretch Challenge

Link the `name` of each wine to a view that shows only the details for that wine. **Hints:**

* Use `ngRoute` and `ng-view` to set up multiple views in your Angular app.
* Use `$routeParams` to figure out which wine to display.
* Your view for a single wine will have a different controller than your view that displays all wines.

## Docs & Resources

* <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">Angular $http</a>
