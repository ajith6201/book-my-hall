var express = require('express');
var router = express.Router();
var Cities = require('../models/cities');

router.post('/cities',function(req,res,next)
{
    console.log(req.body);
    var city = new Cities({
        city_name:req.body.city_name
    });
    console.log(req.body.city_name);
    let promise = city.save();

    promise.then(function(doc)
    {
        return res.status(201).json(doc);
    });

    promise.catch(function(err){
        return res.status(501).json({message:"Error Saving User Data!"});
    });
});

router.get('/getcities',function(req,res,next){
    Cities.find()
    .then(cities=>{res.json(cities);})
    .catch(err=>{res.status(500).send({msg:err.message});})
});

router.delete('/deleteCity/:id',(req,res)=>{
    if(!(req.params.id))
    return res.status(400).send(`No record with given id:${req.params.id}`);

    Cities.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) 
        { res.send(doc);}
        else
        {
            console.log('Error in City Id:'+JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router;