var passport = require('passport');
var mongoose = require('mongoose');
var AppUser = mongoose.model('AppUser');

var sendJSONresponse = function(res,status,content)
{
    res.status(status);
    res.json(content);
}

module.exports.register = function(req,res)
{
    var user = new AppUser();


    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;

    user.setPassword(req.body.password);

    user.save(function(err)
    {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({"token":token});
    });
};

module.exports.login = function(req,res)
{
    passport.authenticate('local',function(err,user,info)
    {
        var token;
        if(err)
        {
            res.status(404).json(err);
            return err;
        }
        // If a user is found
        if(user)
        {
            res.status(200);
            res.json({
                "token":token
            });
        }
        // If user is not found
        else
        {
            res.status(401).json(info);
        }
    })(req,res);
};