const express = require("express");
const { createUser } = require("../controllers/user.controller");
const userRout = express.Router();
userRout.post("/createuser", createUser)

module.exports = userRout;