const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const {PORT, HOST} = process.env;
const contactsRoute = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/contacts', contactsRoute);

mongoose.set('strictQuery', false);
mongoose.connect(HOST, () => console.log("DB is connect"));

app.listen(PORT, () => console.log(`Server is running, on port: ${PORT}`));