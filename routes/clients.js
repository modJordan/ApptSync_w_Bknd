// routes/clients.js

const express = require('express');
const router = express.Router();
const Client = require('../models/client');

// POST route to add a new client
router.post('/', async (req, res) => {
    try {
        const newClient = new Client(req.body);
        const savedClient = await newClient.save();
        res.status(201).json(savedClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET route to retrieve all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add other client-related routes here

module.exports = router;
