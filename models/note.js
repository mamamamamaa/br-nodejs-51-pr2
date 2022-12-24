const { Schema, model } = require("mongoose");

const noteSchema = Schema({
    title: String,
    text: String,
    date: Date,
    contact: {
        type: Schema.Types.ObjectId,
        ref: 'contact'
    }
})