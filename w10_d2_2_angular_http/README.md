# Angular $http

The <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">$http</a> service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

| Objectives |
| :--- |
|  |

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
    ...
  </html>
  ```

2. Include the $http dependency in your Angular controller. Don't forget to also include the controller in `index.html`.

  ```js
  // app.js
  angular.module('exampleApp', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
      // controller logic
    }]);
  ```

  ```html
  <!-- index.html -->
  <body ng-controller="MainCtrl">
    ...
  </body>
  ```

## $http Syntax

#### 1. Long-Form

Similar to jQuery's `$.ajax()`.

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

TODO: Add DareToDiscover docs

We're going to be using Angular $http and the <a href="http://daretodiscover.herokuapp.com" target="_blank">DareToDiscover API</a> to build a wine discovery app. DareToDiscover is a RESTful API, so its request syntax follows this pattern:

**Base URL:** http://daretodiscover.herokuapp.com

| HTTP Verb | URL | Functionality |
| :--- | :--- | :--- |
| GET | /wines | READS all wines |
| POST | /wines | CREATES new wine |
| GET | /wines/:id | READS one wine |
| PUT | /wines/:id | UPDATES one wine |
| DELETE | /wines/:id | DESTROYS one wine |

1. Open up Postman and make a request to get all wines.
2. Set up a new project with an `app.js` and an `index.html`.
  * Your `app.js` should have:
    * Angular app defined (`angular.module( ... )`)
  * Your `index.html` should have:
    * Angular CDN
    * `app.js` script
    * `ng-app` in either the `<html>` tag
3. Make a new controller called `WinesCtrl`

TODO: Finish writing challenges. Solution is in `angular_wine_app` repo

## Docs & Resources

* <a href="https://docs.angularjs.org/api/ng/service/$http" target="_blank">Angular $http Docs</a>
