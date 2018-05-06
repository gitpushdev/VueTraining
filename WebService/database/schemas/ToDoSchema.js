var mongoose = require('mongoose');

var ToDoSchema = mongoose.Schema({
    content: String,
    creationDate: String,
    isCompleted: Boolean,
    folderRef: String,
    userId: String
});

var todoModel = mongoose.model("ToDo", ToDoSchema)
module.exports = todoModel;