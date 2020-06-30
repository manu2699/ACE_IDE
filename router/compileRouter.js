const express = require("express");
const app = express.Router();
const { cpp, python, java } = require('compile-run');
const { redirectLang } = require("../middlewares/compileMW")

app.post('/compile-run', redirectLang);

app.post('/compile', (req, res) => {
  const sourcecode = req.body.code;
  let resultPromise = python.runSource(sourcecode, { stdin: '3\n2 ' });
  resultPromise
    .then(result => {
      console.log(result);
      res.send(result)
    })
    .catch(err => {
      console.log(err);
      res.send(err)
    });
})

module.exports = app;