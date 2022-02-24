
const express = require("express");

const cors= require("cors");

const { register, login, loginMobile } = require("./controllers/auth.controller");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/register", register);
app.post("/login", login);
app.post("/loginmobile", loginMobile);


module.exports = app;
