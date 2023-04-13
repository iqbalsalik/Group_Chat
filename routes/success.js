const express = require("express");
const router = express.Router();

const successController = require("../controllers/successController");

router.use("/success",successController.successPageController) 

module.exports = router;