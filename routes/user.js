const route = require('express').Router();
const { signupUser, loginUser, getInfoUser, logOut } = require("../controller/user")
const auth = require("../middleware/auth")

route.post("/signup", signupUser)
route.post("/login", loginUser)
route.get("/current", auth, getInfoUser)
route.post("/logout", auth, logOut)

module.exports = route