var express = require('express');
var Events = require('../model/Events'); // mongoose schema

var router = express.Router();


// All Events
router.get('/api/', function(req, res, next) {
  
  
  Events.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
});


// Event By Id
router.get('/api/:id', function(req, res, next) {
  Events.findOne(req.params.id, function (err, data) {
    if (err) {
      return next(err);
    }
    
    res.json(data);
  });
});

// Post Event
router.post('/api/', function(req, res, next) {
  Events.create(req.body, function (err, data) {
    if (err) {
      return next(err);
    }

    res.json(data);
  });
});

// Update Event
router.put('/api/:id', function(req, res, next) {
  Events.updateOne(req.params.id, req.body, function (err, data) {
    if (err) {
      return next(err);      
    }
    res.json(data);
  });
});

// Delete Event
router.delete('/api/:id', function(req, res, next) {
  Events.deleteOne(req.params.id, req.body, function (err, data) {
    if (err) {
      return next(err);
    }
    res.json(data);
  });
});

module.exports = router;