const express = require('express')

const app = express();
app.use(express.json());
app.use('/api', require("./router/compileRouter"))



const port = process.env.PORT || 5000;
const serveHost = process.env.YOUR_HOST || "0.0.0.0";

var server = app.listen(port, serveHost, () => {
  console.log(`Server running on ${port}`);
});
