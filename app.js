/**
 * Created by jianglei660 on 2017/9/20.
 *
 * index of Application
 */

'use strict';

var express = require('express');

var app = express();
var http = require('http');

require('./routes')(app);

var server = http.createServer(app);
server.listen(8080);

