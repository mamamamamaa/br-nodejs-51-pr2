const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { PORT, HOST } = process.env;
const contactsRoute = require("./routes/contact");
const notesRoute = require("./routes/note")
const userRoute = require("./routes/user")

const app = express();

app.use(cors());
app.use(express.json());
app.use('/contacts', contactsRoute);
app.use('/note', notesRoute);
app.use('/users', userRoute)

mongoose.set('strictQuery', false);
mongoose.connect(HOST, () => console.log("DB is connect"));

app.listen(PORT, () => console.log(`Server is running, on port: ${PORT}`));