const { python } = require('compile-run');

const runPy = async (code, input, res) => {
  const sourcecode = code;
  let resultPromise = python.runSource(sourcecode, { stdin: input });
  resultPromise
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    });
}

module.exports = { runPy };