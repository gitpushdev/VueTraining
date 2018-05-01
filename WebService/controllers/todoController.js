'use-strict';
var moment = require('moment');
var toDoModel = require('../database/schemas/ToDoSchema');
var statusCodes = require('../core/status');
var taskMapper = require('../mappers/Tasks');

exports.allTasks = function (req, res) {
    var query = { folderRef: req.params.folderRef }
    if (req.params.taskId) {
        query._id = req.params.taskId;
    }
    toDoModel.find(query, (error, toDoModels) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(taskMapper.mapTaskArray(toDoModels));
    });
}

exports.createTask = function (req, res) {
    if (!isTaskValid(req.body)) {
        res.status(statusCodes.BadRequest);
        res.send({})
        return;
    }
    var model = new toDoModel();
    model.content = req.body.content;
    model.creationDate = moment().format("MMM DD, YYYY");
    model.isCompleted = req.body.isCompleted;
    model.folderRef = req.params.folderRef;
    model.save((error, toDo) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(toDo);
    })
}

exports.updateTask = function (req, res) {
    toDoModel.updateOne({ _id: req.body.id }, req.body, (error, updated) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(updated);
    })
}

exports.deleteTask = function (req, res) {
    toDoModel.remove({ _id: req.query.id }, (error, result) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json({ result: "Success" });
    })
}



/**
 * Check if a task is valid
 * @param {object} task Task object to check
 */
function isTaskValid(task) {
    return (task.content || false)
}