var express = require('express');
var contact = express.Router();

var mongoose = require('mongoose');
require('../models/contact-request');

var mongoDB = 'mongodb://127.0.0.1/tipaw';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/* POST contact form. */
contact.post('/', function (req, res, next) {
  var contactRequestSchema = mongoose.model('contactRequest', contactRequestSchema);
  var newContactRequest = new contactRequestSchema(req.body);

  newContactRequest.save(function (err) {
    if (err) return next(err);
    res.send(res.statusCode);
  });
});

module.exports = contact;
