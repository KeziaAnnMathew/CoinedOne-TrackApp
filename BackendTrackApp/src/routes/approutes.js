const express = require('express');
const Appdata = require('../model/AppModel');
const appRouter=express.Router();
function router(){
    appRouter.get('/getapps',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Appdata.find()
        .then((data)=>{
            res.send(data);
        })
    });
    appRouter.get('/getsingleapp/:id',function(req,res){
        var id=req.params.id;
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Appdata.findOne({_id:id})
        .then((data)=>{
           res.send(data)
        })
    });
    appRouter.put('/appblocked',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        var id=req.body.item._id;
        var item = {
            appname: req.body.item.appname,
            blocked: req.body.item.blocked,
            limited:  req.body.item.limited,
            limitWeekdays:  req.body.item.limitWeekdays,
            limitWeekend:  req.body.item.limitWeekend
        }
        Appdata.findByIdAndUpdate({_id:id}, item, (err,doc)=>{
                if(!err){res.send(doc)}
             })
    });
    appRouter.put('/updateLimits',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        var id=req.body.item._id;
        var item = {
            appname: req.body.item.appname,
            blocked: req.body.item.blocked,
            limited:  req.body.item.limited,
            limitWeekdays:  req.body.item.limitWeekdays,
            limitWeekend:  req.body.item.limitWeekend
        }
        Appdata.findByIdAndUpdate({_id:id}, item, (err,doc)=>{
                if(!err){res.send(doc)}
             })
    });
   
    return appRouter;
}


module.exports = router;