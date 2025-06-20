

const mongoose = require('mongoose');

const checkinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  flightNumber: { type: String, required: true },
  status: { type: String, default: 'safe' },
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Checkin', checkinSchema);

