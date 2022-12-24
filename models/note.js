const { Schema, model } = require("mongoose");

const noteSchema = Schema({
    title: String,
    text: String,
    date: String,
    idContact: {
        type: Schema.Types.ObjectId,
        ref: 'contact'
    }
})

const Note = model('note', noteSchema)

module.exports = Note;