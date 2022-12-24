const Contact = require('../models/contact');
const Note = require("../models/note")

const getAll = async (req, res) => {
    const allContacts = await Contact.find().populate("notes", {
        title: 1,
        text: 1,
        date: 1,
    });
    res.json(allContacts);
}
const addContact = async (req, res) => {
    const { name, number } = req.body;
    const newContact = await Contact.create({ name, number });
    res.status(201).json(newContact);
}

// const updContact = async (req, res) => {
//     const { id } = req.params;
//     const { noteId } = req.body;
//     const result = await Contact.findByIdAndUpdate(id, {
//         $push: {
//             notes: noteId
//         }
//     }, {
//         new: true
//     })
//     res.json(result)
// }

const deleteContact = async (req, res) => {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndRemove(id);
    await Note.deleteMany({ idContact: id });
    res.json(deletedContact);
}

module.exports = {
    getAll, addContact, deleteContact
}