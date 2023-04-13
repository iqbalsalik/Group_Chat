const path = require("path");

const rootDir = require("../util/path");

exports.successPageController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","success.html"))
};