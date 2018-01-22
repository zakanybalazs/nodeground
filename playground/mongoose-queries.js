const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/db_config');
const {Todo} = require('./../server/models/todo');


var id = '5a64b227bcf87a176730bdc7';

if (!ObjectID.isValid(id)) {
  console.log("not valid id: ", id);
}

Todo.find({ //returns array containing the todos
  _id: id
}).then((todos) => {
  console.log("todos: ",todos);
});

Todo.findOne({ // returns only the first one
  _id: id
}).then((todo) => {
  console.log("todo: ",todo);
});

Todo.findById({ // returns todo corresponding to this id (which is unique)
  _id: id
}).then((todo) => {
  console.log("todo: ",todo);
});

/*
    id that isn't in the database
    this is for testing the handling
*/
var id = 'xa64b2s27bcf87a176730bdc7';

if (!ObjectID.isValid(id)) {
  console.log("not valid id: ", id);
}

Todo.findById({ // returns todo corresponding to this id (which is unique)
  _id: id
}).then((todo) => {
  if(todo) {
    console.log("todo: ",todo);
  } else {
    console.log('id not found');
  }}).catch((err) => {
    return null;
  });
