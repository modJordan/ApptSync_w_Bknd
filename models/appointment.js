const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    date: {
        type: Date,
        required: true
    },
    milestoneEvents: String,
    milestoneDates: String,
    giftRecipient: String,

    // Add other fields as necessary
});

module.exports = mongoose.model('Appointment', appointmentSchema);
