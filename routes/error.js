const express = require("express");

const router = express.Router();

const errocontroller = require("../controllers/errorController")

router.use(errocontroller.erroPageController)

module.exports = router