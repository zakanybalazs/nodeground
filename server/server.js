// external imports
const express = require('express');
const bodyParser = require('body-parser');
//internal imports
const {mongoose} = require('./db/db_config.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  console.log("new POST on server..");
  var todo = new Todo({
    text: req.body.text
  });

todo.save().then((doc) => {
    res.send(doc);
  },(err) => {
    res.status(400).send(err);
});

});

// GET /todos/something

app.listen(3000, () => {
  console.log("started on port 3000");
});

module.exports = {app}

// var new_todo = new Todo({
//   text : 'learn new stuff',
//   completed : false
// });
// var new_user = new User({
//   email: 'zakany.balazs@viapangroup.com'
// })
//

// new_user.save().then((doc) => {
//     console.log("new user saved successfully: ", doc);
//   },(err) => {
//      console.log("something went wrong: ", err);
// });
