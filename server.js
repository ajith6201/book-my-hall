const path = require('path');
const express = require('express');
var http=require('http');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/'));

// Send all requests to index.html
app.all('*', function(req, res) {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});
var server=http.createServer(function(req,res){
  res.end('test');
});

server.on('listening',function(){
  console.log('ok, server is running');
});

server.listen(80);
// default Heroku port
app.listen(process.env.PORT || 3000);
console.log(`Example app listening on port`);