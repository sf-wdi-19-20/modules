angular.module('bookApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/bookIndex.html',
        controller: 'BooksCtrl'
      })
      .when('/books/:id', {
        templateUrl: 'partials/bookShow.html',
        controller: 'BooksShowCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('BooksCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.books = [];
    $scope.book = {};

    $http.get('http://daretodiscover.herokuapp.com/books')
      .then(function(response) {
        $scope.books = response.data;
      });

    $scope.createBook = function() {
      $http.post('http://daretodiscover.herokuapp.com/books', $scope.book)
        .then(function(response) {
          var newBook = response.data;
          $scope.book = {};
          $scope.books.push(newBook);
        });
    };

    $scope.updateBook = function(book) {
      $http.put('http://daretodiscover.herokuapp.com/books/' + book.id, book)
        .then(function(response) {
          book.editForm = false;
        });
    };
  }])

  .controller('BooksShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.book = "This is the book";
    var bookId = $routeParams.id;

    $http.get('http://daretodiscover.herokuapp.com/books/' + bookId)
      .then(function(response) {
        $scope.book = response.data;
      });
  }]);