angular.module('app').controller('DocumentController', function($scope, $location) {

  function activate() {

  }

  $scope.save = function() {

  };

  $scope.goBack = function() {
    $location.path('/documents');
  };

  activate();
});