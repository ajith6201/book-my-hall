var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var cities = new Schema({
    city_name:{type:String,required:true,unique: true,uniqueCaseInsensitive: true}
});
cities.plugin(uniqueValidator);
module.exports = mongoose.model('Cities',cities);