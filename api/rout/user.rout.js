const express = require("express");
const { createUser, login, UpdateUser } = require("../controllers/user.controller");
const userRout = express.Router();
userRout.post("/createuser", createUser)
userRout.post("/login", login)
userRout.post("/UpdatUser",UpdateUser)
module.exports = userRout;