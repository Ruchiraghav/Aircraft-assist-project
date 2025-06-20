const mongoose = require('mongoose');

const missingReportSchema = new mongoose.Schema({
  name: String,
  contact: String,
  lastSeenLocation: String,
  flightNumber: String,
  description: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MissingReport', missingReportSchema);
