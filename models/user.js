const { Schema, model } = require("mongoose");

const userSchema = Schema({
    email: String,
    password: String,
    token: String,
    name: String,
})

const User = model("user", userSchema)

module.exports = User