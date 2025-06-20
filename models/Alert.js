const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  flightNumber: String,
  type: String, // e.g., 'Engine Failure', 'Turbulence'
  description: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Alert', alertSchema);
