const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bus",
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Child", childSchema);
