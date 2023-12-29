// routes/appointments.js

const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// POST route to create a new appointment
router.post('/', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        const savedAppointment = await newAppointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET route to retrieve all appointments
router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add other appointment-related routes here

module.exports = router;
