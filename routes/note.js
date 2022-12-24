const route = require("express").Router();
const { getAllNotes, getNote, addNote, deleteNote } = require("../controller/note.js");

route.get('/', getAllNotes);
route.get('/:id', getNote)
route.post('/', addNote);
route.delete('/:id', deleteNote);


module.exports = route;