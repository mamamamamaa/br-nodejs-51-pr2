const { Schema, model } = require("mongoose");

const contactSchema = Schema({
    name: String,
    number: String,
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "note"
    }]
})

const Contact = model('contact', contactSchema);

module.exports = Contact;