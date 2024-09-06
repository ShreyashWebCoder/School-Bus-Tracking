const { Schema, model, default: mongoose } = require("mongoose");
const { string } = require("zod");

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }
},{timestamps : true})

const Contact = new model("Contact", contactSchema);
module.exports = Contact;