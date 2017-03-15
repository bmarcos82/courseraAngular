(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Borja";
  $scope.sayHello = function () {
    return "Hello Coursera";
  }
});

})();
