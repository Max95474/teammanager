'use strict';

var Document = require('../model/document');

function addDocument(req, res) {
  var document = new Document(req.body);
  document.save(req.body, function(err, document) {
    if(err) res.status(500).json();
    res.json(document);
    console.log('Saved: ', document);
  });
}

function updateDocument(req, res) {
  console.log('PUT Document');
  res.json({status: 'OK'});
}

function getDocument(req, res) {
  console.log('GET Document', req.params.id);
  res.json({document: 'some document'});
}

function getDocuments(req, res) {
  console.log('GET Documents');
  res.json({documents: ['doc1`', 'doc2', 'doc3']});
}

function deleteDocument(req, res) {
  console.log('DELETE Document', req.params.id);
  res.json({status: 'OK'});
}

module.exports = {
  addDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument
};