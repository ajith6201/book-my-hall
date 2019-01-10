var mongoose = require('mongoose');
var AppUser = mongoose.model('AppUser');

module.exports.profileReader = function(req,res)
{
    if(!req.payload._id)
    {
        res.status(401).json({"message" : "UnauthorizedError: private profile"});
    }
    else
    {
        AppUser.findById(req.payload._id).exec(function(err,user){res.status(200).json(user);});
    }
};