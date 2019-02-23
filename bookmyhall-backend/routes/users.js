var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register',function(req,res,next)
{
  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now()
  });
<<<<<<< HEAD
  let promise = user.save();
=======
 // console.log(req.body);
  let promise = user.save(function (err) {
    console.log(err);
});
>>>>>>> book-my-hall-branch

  promise.then(function(doc)
  {
    return res.status(201).json(doc);
  });
  promise.catch(function(err)
  {
    return res.status(501).json({message: 'Error registering user.'});
  });

});

//login function
router.post('/login', function(req,res,next){
  let promise = User.findOne({email:req.body.email}).exec();

  promise.then(function(doc){
   if(doc) {
     if(doc.isValid(req.body.password)){
         // generate token
         let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});

         return res.status(200).json(token);

     } else {
       return res.status(501).json({message:' Invalid Credentials'});
     }
   }
   else {
     return res.status(501).json({message:'User email is not registered.'})
   }
  });

  promise.catch(function(err){
    return res.status(501).json({message:'Some internal error'});
  })
});

router.get('/username',verifyToken,function(req,res,next)
{
  return res.status(200).json(decodetoken.username);
});

var decodetoken = '';
function verifyToken(req,res,next)
{
  let token = req.query.token;
  jwt.verify(token,'secret',function(err,tokenData){
    if(err)
    {
      returnres.status(400).json({message:' Unauthorized request'});
    }
    if(tokenData)
    {
      decodetoken = tokenData;
      next();
    }
  });
}
module.exports = router;
