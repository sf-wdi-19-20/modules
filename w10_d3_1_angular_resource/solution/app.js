angular.module('bookApp', ['ngResource'])

.controller('BooksCtrl', ['$scope', 'Book', function ($scope, Book) {
    $scope.book = {};
    $scope.books = [];
    $scope.newBook = {};

    $scope.books = Book.query(); // returns all the books

    $scope.createBook = function(){
        Book.save($scope.newBook);
        $scope.newBook = {}; // clear new book object
    };

    $scope.updateBook = function(book) {
        Book.get({ id: book.id }, function() {
            Book.update({id: book.id}, book);
            book.editForm = false;
        }); 
    };

    $scope.deleteBook = function(book) {
        Book.remove({id:book.id});
        var bookIndex = $scope.books.indexOf(book);
        $scope.books.splice(bookIndex, 1);
    };
    
}])

.service('Book', ['$resource', function ($resource) {
    return $resource('http://daretodiscover.herokuapp.com/books/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      }
  });
}]);

