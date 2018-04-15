'use-strict';
var moment = require('moment');
exports.allTasks = function (req, res) {
    res.json([
        {id: '123321', content: 'Go to bank', creationDate: moment().format("YYYY-MM-DD"), isCompleted: false},
        {id: '005647', content: 'Recharge phone', creationDate: moment().format("YYYY-MM-DD"), isCompleted: false},
        {id: '454987', content: 'Go to store', creationDate: moment().format("YYYY-MM-DD"), isCompleted: false},
        {id: '015687', content: 'Sleep', creationDate: moment().format("YYYY-MM-DD"), isCompleted: false}
    ])
}

exports.createTask = function (req, res) {
    res.json(req.body)
}