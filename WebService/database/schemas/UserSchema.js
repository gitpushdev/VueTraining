var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    isVerified: Boolean,
    registrationDate: String,
    email: String,
    password: String
});

var userModel = mongoose.model("User", UserSchema)
module.exports = userModel;