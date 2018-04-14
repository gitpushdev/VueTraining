var express = require('express');
var app = express();
var http = require('http');

var toDoController = require('./controllers/todoController');
var cors = require('cors')

function sendInfo(req, res) {
    res.send(JSON.stringify({Service: "ToDoService", Version: "1.0"}));
}
app.use(cors())
app.route('/').get(sendInfo);

app.route('/todos')
    .get(toDoController.allTasks);


var server = http.createServer(app);
server.listen(3000);
console.log("Started Server on port: " + 3000);