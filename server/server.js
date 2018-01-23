// external imports
const express = require('express');
const bodyParser = require('body-parser');
//internal imports

const {maganTIG} = require('./models/magantig');

var app = express();
app.use(bodyParser.json());



app.post('/tig_magan', (req, res) => {
  console.log("new POST on server..");
  maganTIG({
    text: req.body
  });
});

app.listen(3000, () => {
  console.log("started on port 3000");
});

module.exports = {app}
