const mongoose = require('mongoose');

// requires further validation ( express-validator ? )
const contactRequestSchema = mongoose.Schema({
  subject: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('contactRequest', contactRequestSchema);