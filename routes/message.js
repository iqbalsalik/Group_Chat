const express = require("express");
const path = require("path");

const rootDir = require("../util/path")

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "message.html"))
})

let data = []

router.post("/", (req, res, next) => {
    data.push(`${req.body.userName}: ${req.body.message}`)
    res.sendFile(path.join(rootDir, "views", "message.html"))
});

module.exports = router;




