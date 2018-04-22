'use-strict';

var fs = require('fs');
let configPath = './config.json';
var parsedConfig = JSON.parse(fs.readFileSync(configPath));

module.exports = parsedConfig;