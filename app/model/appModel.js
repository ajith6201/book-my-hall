var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema(
    {
        username:
        {
            type:String,
            unique:true,
            required:true
        },
        firstname:
        {
            type:String,
            required:true
        },
        lastname:
        {
            type:String,
            required:true
        },
        hash:String,
        salt:String
    }
);

userSchema.methods.setPassword = function(password)
{
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password.this.salt,1000,64,'sha512').toString;
};

userSchema.methods.validPassword = function(password)
{
    var hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString;
    return this.hash === hash;
};

userSchema.methods.generateJwt = function()
{
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);
    return jwt.sign(
        {
            _id:this._id,
            username:this.username,
            firstname:this.firstname,
            exp:parseInt(expiry.getTime()/1000)
        },'my_secret_key'
    );
};

mongoose.model('AppUser', userSchema);
