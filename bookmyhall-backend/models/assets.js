var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assets = new Schema({
    user_id:{type:String,required:true},
    name:{type:String,required:true},
    gender:{type:String,required:true},
    phone_no:{type:Number,required:true},
    id_proof:{type:String,required:true},
    address:{type:String,required:true},
    zipcode:{type:Number,required:true},
    city:{type:String,required:true},
    hall_name:{type:String,required:true},
    status:{type:String,required:true},
    created_datetime:{type:Date,required:true}
});

module.exports = mongoose.model('Assets',assets);