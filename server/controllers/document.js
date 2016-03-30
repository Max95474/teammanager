'use strict';

var Document = require('../model/document');

function addDocument(req, res) {
  var accessLevel = JSON.parse(req.cookies.user).accessLevel;
  if(accessLevel === 1) {
    var document = new Document(req.body);
    document.save(function(err, document) {
      if(err) res.status(500).json();
      else res.json(document);
      console.log('Saved: ', document);
    });
  } else {
    res.status(403).json('Access denied');
  }
}

function updateDocument(req, res) {
  var accessLevel = JSON.parse(req.cookies.user).accessLevel;
  if(accessLevel === 1 || accessLevel === 2) {
    Document.findById({_id: req.body._id}, function(err, document) {
      if(err) {
        res.status(404).json();
      } else {
        for(var field in req.body) {
          if(req.body.hasOwnProperty(field))
            document[field] = req.body[field];
        }
        document.save(function(err, document) {
          if(err) res.status(500).json();
          else res.send(document);
        })
      }
    })
  } else {
    res.status(403).json('Access denied');
  }
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
  var accessLevel = JSON.parse(req.cookies.user).accessLevel;
  if(accessLevel === 3) {
    Document.findOne({_id: req.params.id}, function(err, document) {
      if(err) res.status(500);
      if(document) {
        document.remove(function(err, document) {
          if(err) res.status(500);
          else res.json({status: 'OK'});
        })
      }
    })
  } else {
    res.status(403).json('Access denied');
  }
}

module.exports = {
  addDocument,
  updateDocument,
  getDocument,
  getDocuments,
  deleteDocument
};