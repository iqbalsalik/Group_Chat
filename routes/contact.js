const express = require("express");

const routes = express.Router();

const contactController = require("../controllers/contactController")



routes.get("/contact-us",contactController.contactController)

module.exports = routes;



