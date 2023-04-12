const express = require("express");

const path = require("path")


let router = express.Router()

router.use("/login",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","login.html"))
})

module.exports = router; 