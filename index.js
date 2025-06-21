//ok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
const Alert = require('./models/Alert');
const MissingReport = require('./models/MissingReport');
const cron = require('node-cron');
const express = require('express');
const mongoose = require('mongoose');
const Checkin = require('./models/Checkin'); // <-- Make sure this file exists


const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// ✈️ Dummy aircrafts for in-memory demo
let aircrafts = [
  { id: 1, name: 'Boeing 737', status: 'Available' },
  { id: 2, name: 'Airbus A320', status: 'In Maintenance' }
];

// 🏠 Home route
app.get('/', (req, res) => {
  res.send('Hello from Aircraft Assist backend!');
});

// 🔄 GET all aircrafts
app.get('/aircrafts', (req, res) => {
  res.json(aircrafts);
});

// ➕ POST new aircraft
app.post('/aircrafts', (req, res) => {
  const { name, status } = req.body;
  const newAircraft = {
    id: aircrafts.length + 1,
    name,
    status
  };
  aircrafts.push(newAircraft);
  res.status(201).json(newAircraft);
});

// ✅ POST: Check-in route (MongoDB)
app.post('/api/checkin', async (req, res) => {
  try {
    const newCheckin = new Checkin(req.body);
    await newCheckin.save();
    res.status(201).json({ message: "Check-in saved ✅", data: newCheckin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 GET all check-in data
app.get('/api/checkin', async (req, res) => {
  try {
    const checkins = await Checkin.find(); // Fetches all check-in entries from MongoDB
    res.json(checkins); // Sends them as JSON response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/api/alert', async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    await newAlert.save();
    res.status(201).json({ message: "Alert saved ✅", data: newAlert });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.post('/api/missing', async (req, res) => {
  try {
    const newReport = new MissingReport(req.body);
    await newReport.save();
    res.status(201).json({ message: "Missing report saved ✅", data: newReport });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// 🆕 ✅ GET: All Check-ins from MongoDB
app.get('/api/checkin', async (req, res) => {
  try {
    const checkins = await Checkin.find();
    res.status(200).json(checkins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Search flights
app.get('/flights', (req, res) => {
  const { flightNo } = req.query;
  const result = aircrafts.find(flight => flight.name === flightNo);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: "Flight not found" });
  }
});

// 📍 Track a flight
app.get('/track/:flightId', (req, res) => {
  const flightId = parseInt(req.params.flightId);
  const flight = aircrafts.find(f => f.id === flightId);
  if (flight) {
    res.json({
      flightId: flight.id,
      name: flight.name,
      latitude: 28.6139,
      longitude: 77.2090,
    });
  } else {
    res.status(404).json({ message: "Flight not found" });
  }
});
// 🚨 Simulate Crash Alert Every 1 Minute
cron.schedule('* * * * *', async () => {
  try {
    const fakeAlert = new Alert({
      flightId: 'AI999',
      message: '⚠️ Emergency! Possible crash detected.',
      severity: 'high',
      time: new Date()
    });
    await fakeAlert.save();
    console.log('🔔 Simulated crash alert inserted');
  } catch (err) {
    console.error('❌ Failed to insert crash alert:', err.message);
  }
});


// 🔗 MongoDB Connection
mongoose.connect("mongodb+srv://agarwalrichu3:ruchi123@cluster0.zhhca1i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
  });

//chatbot
  const chatbotRoutes = require('./chatbot');
app.use('/', chatbotRoutes);

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
