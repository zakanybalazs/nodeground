const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model(
  'Todo',{
    text: {
      type: String
    },
    completed: {
      type: Boolean
    },
    completedAt : {
      type: Number
    }
  });

var new_todo = new Todo({
  text : 'learn new stuff',
  completed : false
})

new_todo.save().then((doc) => {
  console.log("new todo saved successfully: ", doc);
},(err) => {
   console.log("something went wrong");
});
