var mongoose = require('mongoose');

var ToDoSchema = mongoose.Schema({
    content: String,
    creationDate: String,
    isCompleted: Boolean
});

var todoModel = mongoose.model("ToDo", ToDoSchema)
module.exports = todoModel;