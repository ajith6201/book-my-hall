var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var halls = new Schema({
    city_id:{type:String,required:true},
    hall_name:{type:String,required:true}
});

module.exports = mongoose.model('Halls',halls);