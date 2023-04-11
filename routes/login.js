const express = require("express");

let router = express.Router()

router.use("/login",(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`userId`).value)" action="/" method="POST"><input type="text" id = "userId" name="userId" placeholder="Enter userName"><br><button type="submit">Login</button></form>');
    res.redirect("/")
})

module.exports = router; 