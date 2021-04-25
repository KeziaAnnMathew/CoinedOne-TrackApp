const express = require('express');
const scheduleRouter=express.Router();
const Scheduledata = require('../model/ScheduleModel');
function router(){
    scheduleRouter.get('/getschedules',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        Scheduledata.find()
        .then((data)=>{
            res.send(data);
        })
    });
    scheduleRouter.post('/addschedules',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        var schedule={
            days:req.body.schedule.days,
            fromTime:req.body.schedule.fromTime,
            toTime:req.body.schedule.toTime,
        }
        var scheduleItem=Scheduledata(schedule);
        scheduleItem.save();
    });
    scheduleRouter.put('/editschedules',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
        var id=req.body.schedule._id;
        var schedule={
            days:req.body.schedule.days,
            fromTime:req.body.schedule.fromTime,
            toTime:req.body.schedule.toTime,
        }
        Scheduledata.findByIdAndUpdate({_id:id}, schedule, (err,doc)=>{
            if(!err){res.send(doc)}
         })
    });
    return scheduleRouter;
}


module.exports = router;