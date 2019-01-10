const path = require('path');
const express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');

//Bring in the data model
require('./app/config/passport');

// Bring in the routes for the API (delete the default routes)
var routesApi = require('./app/routes/index');

const app = express();


app.use(bodyParser.json());
app.use(cors());

//Initialise Passport before using the route middleware
app.use(passport.initialize());
//Use the API routes when path starts with /api
app.use('/app', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.use(
  bodyParser.urlencoded({extended:true})
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Serve static files
app.use(express.static(__dirname + '/dist/book-my-hall'));

// Send all requests to index.html
app.all('*', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/dist/book-my-hall/index.html'));
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

port = process.env.PORT || 3000;
//const port = config.PORT || process.env.PORT || 3000;
app.listen(port);
console.log("Server Running at.."+port);