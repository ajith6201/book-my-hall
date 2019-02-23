var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var halls = new Schema({
    hall_name:{type:String,required:true}
});

module.exports = mongoose.model('Halls',halls);