# Angular $http

The <a href="https://docs.angularjs.org/api/ng/service/$http">$http</a> service is a core Angular service that facilitates communication with the remote HTTP servers via the browser's XMLHttpRequest object or via JSONP.

## Set Up

$http will be a dependency in your Angular controller, so before including it, make sure you have an Angular app and controller set up.

1. Define your Angular app in `app.js` and include it in the `<body>` tag in `index.html`.

  ```js
  // app.js
  angular.module('StarterApp', []);
  ```

  ```html
  <!-- index.html -->
  <body ng-app="StarterApp">
    <!-- view logic -->
  </body>
  ```

2. Include the $http dependency in your Angular controller. Don't forget to also include the controller in `index.html`.

  ```js
  // app.js
  angular.module('StarterApp', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
      // controller logic
    }]);
  ```

  ```html
  <!-- index.html -->
  <body ng-app="StarterApp" ng-controller="MainCtrl">
    <!-- view logic -->
  </body>
  ```

## $http Syntax

#### 1. Long-Form

#### 2. Shortcut Methods

```js
$http.get
$http.post
$http.put
$http.delete
```
