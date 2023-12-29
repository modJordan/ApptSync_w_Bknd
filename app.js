const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Importing routes
const appointmentsRoutes = require('./routes/appointments');
const clientsRoutes = require('./routes/clients');

// Importing database configuration
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json()); // for parsing application/json

// Use routes
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/clients', clientsRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from the API');
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



