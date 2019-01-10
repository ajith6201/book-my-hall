var passport = require('passport');
var LocalStratergy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var AppUser = mongoose.model('AppUser');

passport.use(new LocalStratergy(
    {
        usernameField:'username'
    },
    function(username,password,done)
    {
        AppUser.findOne(
            {
                username:username                
            },
            function(err,user)
            {
                if(err)
                {
                    return done(err);
                }
                // Return if user not found in database
                if(!user)
                {
                    return done(null,false,
                        {message:'User Not Found!'});
                }
                // Return if password is wrong
                if(!user.validPassword(password))
                {
                    return done(null,false,
                        {message:'Password not matched!'});
                }
                // If credentials are correct, return the user object
                return done(null, user);
            }             
        );
    }
    ));

