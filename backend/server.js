const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://contact-frontend-afvm.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.error("MongoDB Error:", err);
  });

app.get("/", (req, res) => {
  res.send("Welcome user, server is running");
});

app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});