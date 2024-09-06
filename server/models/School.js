const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    geoFenceRadius: {
        type: Number,
        required: true
    },
    buses: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Bus'
        }
    ]
}, { timestamps: true });

schoolSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('School', schoolSchema);
