var mongoose = require('mongoose');
var configs = require('../config');
var connection = mongoose.connect('mongodb://' + configs.db.ip + '/todoDB')
connection.then(() => {
    console.log('connected');
}).catch((error) => {
    console.log(error);
});


module.exports = connection;
