'use-strict';
var moment = require('moment');
var toDoModel = require('../database/schemas/ToDoSchema');


exports.allTasks = function (req, res) {
    toDoModel.find((error, toDoModels) => {
        if (error) {
            res.send({error: error});
            return;
        }
        res.json(toDoModels);
    });
}

exports.createTask = function (req, res) {
    var model = new toDoModel();
    model.content = req.body.content;
    model.creationDate = moment().format("MMM DD, YYYY");
    model.isCompleted = req.body.isCompleted;

    model.save((error, toDo) => {
        if (error) {
            res.send({error: error});
            return;
        }
        res.json(toDo);
    })
}

exports.updateTask = function (req, res) {
    toDoModel.updateOne({_id: req.body.id}, req.body, (error, updated) => {
        if (error) {
            res.send({error: error});
            return;
        }
        res.json(updated);
    })
}

exports.deleteTask = function (req, res) {
    toDoModel.remove({_id: req.query.id}, (error, result) => {
        if (error) {
            res.send({error: error});
            return;
        }
        res.json({result: "Success"});
    })
}