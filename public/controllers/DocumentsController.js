angular.module('app').controller('DocumentsController', function($scope, $location, DocumentService) {

  function activate() {
    var Document = DocumentService.Document();
    Document.query(function(data) {
      $scope.documents = data;
    });
  }

  $scope.createDocument = function() {
    $location.path('/document');
    DocumentService.currentDocument(null);
  };

  $scope.openDocument = function($index) {
    DocumentService.currentDocument($scope.documents[$index]);
    $location.path('/document');
  };

  $scope.deleteDocument = function(document, $index) {
    document.$delete({id: document._id}, function() {
      $scope.documents.splice($index, 1);
    });
  };

  activate();
});