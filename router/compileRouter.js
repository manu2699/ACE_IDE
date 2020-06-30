const express = require("express");
const app = express.Router();
const { redirectLang } = require("../middlewares/compileMW")

app.post('/compile-run', redirectLang);

module.exports = app;