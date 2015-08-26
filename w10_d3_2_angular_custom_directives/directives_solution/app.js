angular.module('directivesApp', ['validation.match', 'angularMoment', 'ngMap'])
  
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.message = {
       text: 'Hello world',
       time: new Date()
    };
  }])
  
  .directive('currentWeather', function() {
    return {
      restrict: 'AE',
      scope: {
        city: '@'
      },
      // template: '<div class="current-weather"><h4>Weather for {{city}}</h4>{{weather.main.temp}}</div>',
      templateUrl: function(element, attrs) {
        return attrs.templateUrl || 'templates/currentWeather.html';
      },
      controller: ['$scope', '$http', function ($scope, $http) {
        var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&units=imperial&callback=JSON_CALLBACK&q=";
        $scope.getWeather = function(city) {
          $http({ method: 'JSONP', url: url + city })
            .success(function(data) {
              $scope.weather = data;
            });
        };
      }],
      link: function (scope, element, attrs) {
        scope.weather = scope.getWeather(attrs.city);
      }
    };
  })
  
  .directive('fiveDayForecast', function() {
    return {
      restrict: 'AE',
      scope: {
        city: '@'
      },
      templateUrl: function(element, attrs) {
        return attrs.templateUrl || 'templates/fiveDayForecast.html';
      },
      controller: ['$scope', '$http', function ($scope, $http) {
        var url = "http://api.openweathermap.org/data/2.5/forecast?mode=json&units=imperial&callback=JSON_CALLBACK&q=";
        $scope.getForecast = function(city) {
          $http({ method: 'JSONP', url: url + city })
            .success(function(data) {
              $scope.weather = data;
            });
        };
        // only show one forecast per day
        // filters out anything that does not include '09:00:00'
        $scope.onceDaily = function(forecast) {
          return forecast.dt_txt.indexOf('09:00:00') > -1; 
        };
      }],
      link: function (scope, element, attrs) {
        scope.weather = scope.getForecast(attrs.city);
      }
    };
  })
  
  // formats date to remove time
  .filter('formattedDate', function() {
    return function (input) {
      return input.substring(5, 10).replace(/-/, '/');
    };
  });