const express = require("express");


const loginPageController = require("../controllers/loginController")


let router = express.Router()

router.use("/login", loginPageController.getLoginPage)

module.exports = router; 