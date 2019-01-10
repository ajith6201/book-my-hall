'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bookmyhall'
});

connection.connect((err)=>{
    if(err) throw err;
});

module.exports = connection;