var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cities = new Schema({
    city_name:{type:String,required:true}
});

module.exports = mongoose.model('Cities',cities);