'use strict';

var Document = require('../model/document');

function addDocument(req, res) {
  var document = new Document(req.body);
  document.save(function(err, document) {
    if(err) res.status(500).json();
    else res.json(document);
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
  Document.find({}, function(err, documents) {
    if(err) {
      res.status(500);
    } else {
      res.send(documents);
    }
  })
}

function deleteDocument(req, res) {
  console.log('DELETE Document', req.params.id);
  Document.findOne({_id: req.params.id}, function(err, document) {
    if(err) res.status(500);
    if(document) {
      document.remove(function(err, document) {
        if(err) res.status(500);
        else res.json({status: 'OK'});
      })
    }
  })
}

module.exports = {
  addDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument
};