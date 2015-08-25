angular.module('wineApp', [])
  .controller('WinesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.wines = [];
    $scope.wine = {};

    $http.get('http://daretodiscover.herokuapp.com/wines')
      .then(function(response) {
        $scope.wines = response.data;
      });

    $scope.createWine = function() {
      $http.post('http://daretodiscover.herokuapp.com/wines', $scope.wine)
        .then(function(response) {
          var newWine = response.data;
          $scope.wine = {};
          $scope.wines.unshift(newWine);
        });
    };

    $scope.updateWine = function(wine) {
      $http.put('http://daretodiscover.herokuapp.com/wines/' + wine.id, wine)
        .then(function(response) {
          wine.editForm = false;
        });
    };

    $scope.deleteWine = function(wine) {
      $http.delete('http://daretodiscover.herokuapp.com/wines/' + wine.id)
        .then(function(response) {
          var wineIndex = $scope.wines.indexOf(wine);
          $scope.wines.splice(wineIndex, 1);
        });
    };

  }]);