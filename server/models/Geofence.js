const mongoose = require('mongoose');

const geofenceSchema = new mongoose.Schema({
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true
    },
    radius: {
        type: Number,
        required: true
    },
    center: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
}, { timestamps: true });

geofenceSchema.index({ center: '2dsphere' });

module.exports = mongoose.model('Geofence', geofenceSchema);
