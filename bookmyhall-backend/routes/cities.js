var express = require('express');
var router = express.Router();
var Cities = require('../models/cities');

router.post('/cities',function(req,res,next)
{
    var city = new Cities({
        city_name:req.body.city_name
    });

    let promise = city.save();

    promise.then(function(doc)
    {
        return res.status(201).json(doc);
    });

    promise.catch(function(err){
        return res.status(501).json({message:"Error Saving User Data!"});
    });
});

module.exports = router;