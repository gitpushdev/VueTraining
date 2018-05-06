'use-strict';

var moment = require('moment');
var phash = require('password-hash')
var userModel = require('../database/schemas/UserSchema');
var userMapper = require('../mappers/Users');
var statusCodes = require('../core/status');
var formats = require('../constants/format');
var jwt = require('jsonwebtoken');
var configs = require('../config');

exports.login = function (req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(statusCodes.BadRequest)
            .json({ error: 'Wrong username/password' });
    }
    userModel.findOne({ email: req.body.email }, (error, user) => {
        if (error) {
            return res.status(statusCodes.InternalServerError).json({ error: error });
        }
        if (!user) {
            return res.status(statusCodes.NotAuthorized).send();
        } else {
            if (phash.verify(req.body.password, user.password)) {
                var token = jwt.sign({ userId: user._id, role: 'User' }, configs.jwt.secret);
                res.json(userMapper.mapUser(user, token));
            } else {
                res.status(statusCodes.NotAuthorized);
                res.send({ error: 'Wrong username/password' });
                return;
            }
        }
        return;
    });
}

exports.register = function (req, res) {
    if (!req.body || !isUserValid(req.body)) {
        return res.status(statusCodes.BadRequest).send({ error: '' });
    }

    var model = new userModel();
    model.firstName = req.body.firstName;
    model.lastName = req.body.lastName;
    model.email = req.body.email;
    model.regsitrationDate = moment().format(formats.dateFormat.default);
    model.password = phash.generate(req.body.password);
    model.save((error, user) => {
        if (error) {
            return res.status(statusCodes.InternalServerError).send({ error: error });
        }
        var token = jwt.sign({ userId: user._id, role: 'User' }, configs.jwt.secret);
        res.json(userMapper.mapUser(user, token));
        return;
    });
}


function isUserValid(user) {
    return user.firstName.length > 0 && user.lastName.length > 0 && user.email.length > 0 && user.password.length > 0;
}