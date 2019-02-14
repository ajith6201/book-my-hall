var express = require('express');
var router = express.Router();
var Assets = require('../models/assets');

router.post('/assets',function(req,res,next)
{
    var asset = new Assets({
        user_id:req.body.user_id,
        name:req.body.name,
        gender:req.body.gender,
        phone_no:req.body.phone_no,
        id_proof:req.body.id_proof,
        address:req.body.address,
        zipcode:req.body.zipcode,
        city:req.body.city,
        hall_name:req.body.hall_name,
        status:req.body.status,
        created_datetime:Date.now()
    });
console.log(req.body);
    let promise = asset.save();

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