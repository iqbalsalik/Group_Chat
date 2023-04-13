const path = require("path");
const rootDir = require("../util/path")

let data = []

exports.getMessageController = (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "message.html"))
};

exports.postMessageController = (req, res, next) => {
    data.push(`${req.body.userName}: ${req.body.message}`)
    res.sendFile(path.join(rootDir, "views", "message.html"))
};