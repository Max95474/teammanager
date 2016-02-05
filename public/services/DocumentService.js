angular.module('app').factory('DocumentService', DocumentService);

DocumentService.$inject = ['$resource'];

function DocumentService($resource) {
  var Document = $resource('/api/document/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });

  function getDocument() {
    return Document;
  }

  return {
    Document: getDocument
  };
}