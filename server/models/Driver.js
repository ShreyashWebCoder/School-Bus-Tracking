const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus'
    }
}, { timestamps: true });

module.exports = mongoose.model('Driver', driverSchema);
