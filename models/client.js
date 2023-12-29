const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactDetails: String,
    purchaseHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase'
    }],
    // Add other fields as necessary
});

module.exports = mongoose.model('Client', clientSchema);

