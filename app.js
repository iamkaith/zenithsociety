var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var api = require('./routes/events');
var app = express();

// mongodb connection 
var mongoUrl = '...';
mongoose.connect(mongoUrl, function (err) {
  if (err) {
    console.error("Error connecting to MongoDB");
    process.exit(1);
  }

  console.log("MONGO: Connection good.")

});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

// for API use I hope I did it properly
// it showed as error 304 on console I wasn't sure what that meant? 
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api/', express.static(path.join(__dirname, 'dist')));
app.use('/api/', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;