var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var uniqueValidator = require('mongoose-unique-validator');


var schema = new Schema(
    {
        email:{type:String,required:true,unique: true,uniqueCaseInsensitive: true},
        username:{type:String,required:true,unique: true,uniqueCaseInsensitive: true},
        password:{type:String,required:true},
        creation_dt:{type:Date,require:true}
    }
);
schema.plugin(uniqueValidator);

schema.statics.hashPassword = function hashPassword(password)
{
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedPassword)
{
    return bcrypt.compareSync(hashedPassword,this.password);
}

module.exports = mongoose.model('User',schema);