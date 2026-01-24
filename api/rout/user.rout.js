const express = require("express");
const { createUser, login } = require("../controllers/user.controller");
const userRout = express.Router();
userRout.post("/createuser", createUser)
userRout.post("/login", login)

module.exports = userRout;