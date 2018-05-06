'use-strict';
var moment = require('moment');
var folderModel = require('../database/schemas/FoldersSchema');
var statusCodes = require('../core/status');
var folderMapper = require('../mappers/Folders');

exports.allFolders = function (req, res) {
    folderModel.find({ userId: req.decodedToken.userId }, (error, folderModels) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(folderMapper.mapFoldersArray(folderModels));
    });
}

exports.createFolder = function (req, res) {
    req.body.userId = req.decodedToken.userId;
    if (!isFolderValid(req.body)) {
        res.status(statusCodes.BadRequest);
        res.send({})
        return;
    }
    var model = new folderModel();
    model.title = req.body.title;
    model.creationDate = moment().format("MMM DD, YYYY");
    model.tags = req.body.tags;
    model.userId = req.decodedToken.userId;
    model.save((error, folder) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(folder);
    })
}

exports.updateFolder = function (req, res) {
    req.body.userId = req.decodedToken.userId;
    folderModel.updateOne({ _id: req.body.id }, req.body, (error, updated) => {
        if (error) {
            res.send({ error: error });
            return;
        }
        res.json(updated);
    })
}

exports.deleteFolder = function (req, res) {
    folderModel.remove({ _id: req.params.folderRef, userId: req.decodedToken.userId }, (error, result) => {
        if (error) {
            return res.status(statusCodes.InternalServerError).send({ error: error });
        }

        return res.json({ result: "Success" });
    })
}



/**
 * Check if a task is valid
 * @param {object} task Task object to check
 */
function isFolderValid(folder) {
    return ((folder.title && folder.userId) || false)
}