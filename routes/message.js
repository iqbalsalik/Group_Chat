const express = require("express");

const messageController = require("../controllers/messageController")

const router = express.Router();

router.get("/",messageController.getMessageController )

router.post("/", messageController.postMessageController);

module.exports = router;




