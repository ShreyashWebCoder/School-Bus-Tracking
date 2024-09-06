const mongoose = require('mongoose');

const realTimeLocationSchema = new mongoose.Schema({
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bus',
        required: true
    },
    //   timestamp: { type: Date, default: Date.now },
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
    speed: {
        type: Number,
        required: true
    }
}, { timestamps: true });

realTimeLocationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('RealTimeLocation', realTimeLocationSchema);
