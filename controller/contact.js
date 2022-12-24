const Contact = require('../models/contact');

const getAll = async (req, res) => {
    const allContacts = await Contact.find();
    res.json(allContacts);
}
const addContact = async (req, res) => {
    const {name, number} = req.body;
    const newContact = await Contact.create({name, number});
    res.status(201).json(newContact);
}

const deleteContact = async (req, res) => {
    const {id} = req.params;
    const deletedContact = await Contact.findByIdAndRemove(id);
    res.json(deletedContact);
}

module.exports = {
    getAll, addContact, deleteContact
}