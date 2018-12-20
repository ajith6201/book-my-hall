const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/book-my-hall'));

// Send all requests to index.html
app.all('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/book-my-hall/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 8080);