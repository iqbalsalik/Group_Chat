const path = require("path");
const rootDir = require("../util/path");


exports.contactController = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.html"))
}