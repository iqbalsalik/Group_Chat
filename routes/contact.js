const express = require("express");

const routes = express.Router();

const path = require("path");

const rootDir = require("../util/path")

routes.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.html"))
})

module.exports = routes;



