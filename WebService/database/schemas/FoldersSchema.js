var mongoose = require('mongoose');

var FolderSchema = mongoose.Schema({
    title: String,
    creationDate: String,
    tags: Array
});

var folderModel = mongoose.model("Folder", FolderSchema);
module.exports = folderModel;