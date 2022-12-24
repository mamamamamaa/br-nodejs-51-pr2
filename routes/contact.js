const route = require("express").Router();
const { addContact, getAll, deleteContact } = require("../controller/contact");

route.get('/', getAll);
route.post('/', addContact);
route.delete('/:id', deleteContact);

module.exports = route;