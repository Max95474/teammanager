angular.module('app').controller('DocumentsController', function($scope, $location) {
  $scope.documents = [
    {
      name: 'First document',
      content: 'First document content'
    },
    {
      name: 'Second document',
      content: 'Second document content'
    },
    {
      name: 'Third document',
      content: 'Third document content'
    }
  ];

  function activate() {

  }

  $scope.openDocument = function($index) {
    $location.path('/document');
  };

  activate();
});