const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@cluster0.dhohc.mongodb.net/trackapp?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost:27017/TrackApp');
const Schema= mongoose.Schema;


const ScheduleSchema = new Schema({
    days:[],
    fromTime:String,
    toTime:String

});

var Scheduledata = mongoose.model('scheduledata', ScheduleSchema);

module.exports = Scheduledata;