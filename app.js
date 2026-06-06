const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// API routes for student operations
app.use('/students', studentRoutes);

// Global error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  });
