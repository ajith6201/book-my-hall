var express = require('express');
var router = express.Router();
var Halls = require('../models/halls');
router.post('/halls',function(res,req,next)
{
    var hall = new Halls({
        hall_name:req.body.hall_name
    });

    let promise = hall.save();

    promise.then(function(doc)
    {
        return res.status(201).json(doc);
    });

    promise.catch(function(err)
    {
        return res.status(501).json({message:"Error Saving User Data!"});
    });
});

module.exports = router;