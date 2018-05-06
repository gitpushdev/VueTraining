var express = require('express');
var app = express();
var http = require('http');
var db = require('./database/index');
var toDoController = require('./controllers/todoController');
var foldersController = require('./controllers/foldersController');
var userController = require('./controllers/userController');
var cors = require('cors');
var statusCodes = require('./core/status');
var jwt = require('jsonwebtoken');
var configs = require('./config');


bodyParser = require('body-parser');

function sendInfo(req, res) {
    res.send(JSON.stringify({ Service: "ToDoService", Version: "1.0" }));
}

app.use(cors());
app.route('/').get(sendInfo);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/user')
    .post(userController.register);

app.route('/auth')
    .post(userController.login);


app.use(function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(statusCodes.NotAuthorized).json({ error: 'Not Authorized' });
    } else if (req.headers.authorization) {
        var authHeader = req.headers.authorization;
        if(!authHeader.startsWith('Bearer ')){
            return res.status(statusCodes.NotAuthorized).json({ error: 'Not Authorized' });
        }
        jwt.verify(authHeader.replace('Bearer ', ''), configs.jwt.secret, function (err, decoded) {
            if (err) {
                return res.status(statusCodes.NotAuthorized).json({ error: 'Not Authorized' });
            } else {
                req.decodedToken = decoded;
                next();
            }
        });
    }
});

app.route('/folders/:folderRef/todos/:taskId*?')
    .get(toDoController.allTasks)
    .post(toDoController.createTask)
    .put(toDoController.updateTask)
    .delete(toDoController.deleteTask);

app.route('/folders/:folderRef*?')
    .get(foldersController.allFolders)
    .post(foldersController.createFolder)
    .put(foldersController.updateFolder)
    .delete(foldersController.deleteFolder);






    var server = http.createServer(app);
server.listen(3000);
console.log("Started Server on port: " + 3000);