const { python } = require('compile-run');
const { runPy } = require("../controller/pythonController")
const { runCpp } = require("../controller/cppController");

const redirectLang = async (req, res) => {
  const { lang, code, input } = req.body;
  if (lang == 'python') {
    runPy(code, input, res)
  }
  else if (lang == 'c_cpp') {
    runCpp(code, input, res)
  } else {
    res.send({ "error": "please choose the language." })
  }
}

module.exports = { redirectLang };