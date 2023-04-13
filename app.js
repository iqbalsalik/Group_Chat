const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({extended:false}));

const loginRouter = require("./routes/login");
const messageRouter = require("./routes/message");
const ErrorRouter = require("./routes/error");
const contactRouter = require("./routes/contact")
const successRouter = require("./routes/success")

app.use(loginRouter);
app.use(contactRouter);
app.use(successRouter);
app.use(messageRouter);
app.use(ErrorRouter);

app.listen(3000);