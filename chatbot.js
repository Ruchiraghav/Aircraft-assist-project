const express = require('express');
const router = express.Router();

// Simple AI chatbot placeholder
router.post('/chatbot', (req, res) => {
  const { question } = req.body;
  
  if (!question) {
    return res.status(400).json({ error: "No question provided" });
  }

  // Dummy response
  let answer = "I'm here to help. Please describe your issue.";
  
  if (question.toLowerCase().includes("help")) {
    answer = "Sure, an emergency team will be notified.";
  }

  res.json({ reply: answer });
});

module.exports = router;

