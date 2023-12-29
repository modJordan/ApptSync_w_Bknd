const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const appointmentsRoutes = require('./routes/appointments');
const clientsRoutes = require('./routes/clients');

const app = express();

connectDB();

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// API routes
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/clients', clientsRoutes);

// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
