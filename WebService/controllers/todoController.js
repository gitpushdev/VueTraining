'use-strict';
var moment = require('moment');
var toDoModel = require('../database/schemas/ToDoSchema');
var statusCodes = require('../core/status');
var taskMapper = require('../mappers/Tasks');

exports.allTasks = function (req, res) {
    var query = { folderRef: req.params.folderRef, userId: req.decodedToken.userId }
    if (req.params.taskId) {
        query._id = req.params.taskId;
    }
    toDoModel.find(query, (error, toDoModels) => {
        if (error) {
            return res.status(statusCodes.InternalServerError).send({ error: error });
        }
        return res.json(taskMapper.mapTaskArray(toDoModels));
    });
}

exports.createTask = function (req, res) {
    req.body.userId = req.decodedToken.userId;
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
    model.userId = req.decodedToken.userId;
    model.save((error, toDo) => {
        if (error) {
            return res.status(statusCodes.BadRequest).send({ error: error });
        }
        return res.json(toDo);
    })
}

exports.updateTask = function (req, res) {
    req.body.userId = req.decodedToken.userId;
    toDoModel.updateOne({ _id: req.body.id }, req.body, (error, updated) => {
        if (error) {
            return res.status(statusCodes.BadRequest).send({ error: error });
        }
        return res.json(updated);
    })
}

exports.deleteTask = function (req, res) {
    toDoModel.remove({ _id: req.params.taskId, folderRef: req.params.folderRef, userId: req.decodedToken.userId }, (error, result) => {
        if (error) {
            return res.status(statusCodes.BadRequest).send({ error: error });
        }
        return res.json({ result: "Success" });
    })
}



/**
 * Check if a task is valid
 * @param {object} task Task object to check
 */
function isTaskValid(task) {
    return ((task.content && task.userId) || false)
}