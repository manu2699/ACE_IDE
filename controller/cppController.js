const { cpp } = require('compile-run');

const runCpp = async (code, input, res) => {
  const sourcecode = code;
  let resultPromise = cpp.runSource(sourcecode, { stdin: input });
  resultPromise
    .then(result => {
      if (result.stderr != "") {
        let err = result.stderr, newErr = "";
        err = err.split("\n")
        for (let i = 0; i < err.length; i++) {
          if (err[i].indexOf(".cpp") > 0) {
            newErr += err[i].slice(err[i].indexOf(".cpp"), err[i].length) + "\n"
          } else {
            newErr += err[i] + "\n"
          }
        }
        result.stderr = newErr;
      }
      res.send(result)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    });
}

module.exports = { runCpp };