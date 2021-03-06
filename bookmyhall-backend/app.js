var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var assetsRouter = require('./routes/assets');
var cityRouter = require('./routes/cities');
var hallRouter = require('./routes/halls');

var app = express();

//add mongoose 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookmyhall', {useNewUrlParser: true});

//add cors request
var cors = require('cors');
app.use(cors({
  origin:'http://localhost:4200'
}));

//for aws ec2 instance
// app.use(cors({
//   origin:'http://52.14.158.45:4200'
// }));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users', assetsRouter);
app.use('/users',cityRouter);
app.use('/users',hallRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
