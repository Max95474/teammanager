angular.module('app').factory('DocumentService', DocumentService);

DocumentService.$inject = ['$resource'];

function DocumentService($resource) {
  var document;
  var Document = $resource('/api/document/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });

  function currentDocument(doc) {
    if(doc) document = doc;
    else if(doc === null) document = doc;
    else return document;
  }

  function getDocument() {
    return Document;
  }

  return {
    Document: getDocument,
    currentDocument: currentDocument
  };
}