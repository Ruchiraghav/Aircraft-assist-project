# 🛫 Aircraft Assist – Backend System for Emergency Aviation Support

Aircraft Assist is a backend-driven application designed to simulate and manage critical aviation events such as **crash alerts**, **check-ins**, **missing reports**, and a smart **AI chatbot** interface. Built with **Node.js**, **Express**, and **MongoDB**, the project provides robust APIs for emergency response workflows.

---

## 🚀 Tech Stack

| Tech            | Description                              |
|-----------------|------------------------------------------|
| 🟩 Node.js       | Runtime for building the backend         |
| 🚂 Express.js    | Web framework for API routing            |
| 🍃 MongoDB       | NoSQL database for storing reports & logs |
| 🧠 Mongoose      | ODM for schema modeling                  |
| 🔐 JWT & bcrypt  | Secure user authentication               |
| 🧭 Cron Jobs     | Simulates real-time crash alerts         |
| 💬 Postman       | API testing and debugging                |
| 🛠 Git & GitHub  | Version control and collaboration        |

---

## ✨ Features

- ✅ **User Authentication**  
  - Register & Login (JWT-based)  
  - Passwords hashed with `bcrypt`

- 📍 **Check-In System**  
  - Users can update their location/status regularly

- 🚨 **Crash Alert Simulation**  
  - Cron job auto-triggers crash alerts at intervals  
  - Alerts stored and retrievable via API

- 📢 **Missing Report Module**  
  - Submit and fetch missing passenger reports  
  - Structured using MongoDB collections

- 🤖 **AI Chatbot (Ask Assistant)**  
  - Chatbot route with chat history saved to DB  
  - Ready for future AI integration

- 🔎 **API Testing with Postman**  
  - All endpoints validated using Postman collections

---


