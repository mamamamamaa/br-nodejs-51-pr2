const Note = require("../models/note")

const getAllNotes = async (req, res) => {
    const allNotes = await Note.find().populate("idContact", {
        name: 1,
        number: 1,
    });
    res.json(allNotes);
}

const getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id).populate("idContact");
    res.json(note);
}

const addNote = async (req, res) => {
    const { title, text, date, idContact } = req.body;
    const newNote = await Note.create({ title, text, date, idContact });
    res.status(201).json(newNote);
}

const deleteNote = async (req, res) => {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndRemove(id);
    res.json(deletedNote);
}

module.exports = {
    getAllNotes, getNote, addNote, deleteNote
}