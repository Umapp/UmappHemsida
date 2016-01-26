'use strict';

var express = require('express'),
    http = require('http'),
    path = require('path');

var port = process.env.port || 1339;
var server = express();

var bodyParser = require('body-parser');



server.use(express.static(__dirname + '/public'));
server.use(bodyParser.json());

server.listen(port);
console.log("Server started on port: " + port);