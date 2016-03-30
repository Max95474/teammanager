angular.module('app').controller('DocumentController',
  function($scope, $location, DocumentService, ErrorService) {
  $scope.isNewDocument = false;

  function activate() {
    var document = DocumentService.currentDocument();
    if(document == null) $scope.isNewDocument = true;
    else $scope.document = document;
  }

  $scope.saveDocument = function() {
    var Document = DocumentService.Document();
    var document = new Document($scope.document);
    if($scope.isNewDocument) {
      document.$save().then(function() {
        $location.path('/documents');
      }).catch(function(err) {
        ErrorService.showErrorModal(err.data);
      })
    } else {
      document.$update({id: document._id}, function() {
        $location.path('/documents');
      })
    }

  };

  $scope.toDocuments = function() {
    $location.path('/documents');
  };

  activate();
});