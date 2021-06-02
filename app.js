var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var notificationRouter = require('./src/routes/notification_router');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api.evoluyr/noficication', notificationRouter)

module.exports = app;
