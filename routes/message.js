const express = require("express");

const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send(`<p></p><form action = "/" method = "POST" onsubmit = 'document.getElementById("username").value = localStorage.getItem("username")'><input type="text" name="message" placeholder="Enter message"><input type="hidden" name="userName" id = "username"><br><button type="submit">Send</button></form>`)
})

let data = []

router.post("/",(req,res,next)=>{
    data.push(`${req.body.userName}: ${req.body.message}`)
    res.send(`<p>${data}</p><form action = "/" method = "POST" onsubmit = 'document.getElementById("username").value = localStorage.getItem("username")'><input type="text" name="message" placeholder="Enter message"><input type="hidden" name="userName" id = "username"><br><button type="submit">Send</button></form>`)
})

module.exports = router;