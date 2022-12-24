const route = require("express").Router();
const { addContact, getAll, deleteContact, updContact } = require("../controller/contact");

route.get('/', getAll);
route.post('/', addContact);
route.delete('/:id', deleteContact);
route.put('/:id', updContact)

module.exports = route;