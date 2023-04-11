const express = require("express");

const fs = require("fs");

const bodyParser = require("body-parser");

const loginRouter = require("./routes/login");
const messageRouter = require("./routes/message");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRouter);
app.use(messageRouter);

app.listen(3000);