var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/tipaw';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// /* GET contacts. */
// router.get('/', function(req, res, next) {
//   ContactRequest.find()
// });

/* POST contact form. */
router.post('/', function(req, res, next) {
var contactRequest = new contactRequestModel(req.body);
  // Create an instance of model SomeModel

// Save the new model instance, passing a callback
contactRequest.save(function (err) {
  if (err) return handleError(err);
  console.log('saved !')
});
});

module.exports = router;
