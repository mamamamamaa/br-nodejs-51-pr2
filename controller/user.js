const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
require("dotenv").config()

const { SECRET_KEY } = process.env

const signupUser = async (req, res) => {
    const { email, password, name } = req.body;

    const passCrypt = await bcrypt.hash(password, 10)

    const user = await User.create({ email, password: passCrypt, name })

    res.status(201).json({ user })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    const comparePass = await bcrypt.compare(password, user.password)

    if (!comparePass) {
        res.status(403).json("Incorrect e-mail or password")
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY)

    await User.findByIdAndUpdate(user._id, { token })
    res.send({ token, user })
}

const getInfoUser = (req, res) => {
    res.send(req.user)
}

const logOut = async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { token: '' })
    res.status(204).json("Logout")
}

module.exports = {
    signupUser,
    loginUser,
    getInfoUser,
    logOut,
}