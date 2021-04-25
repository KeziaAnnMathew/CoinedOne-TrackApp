const mongoose =require("mongoose");
const Schema= mongoose.Schema;


const AppSchema = new Schema({
  appname:String,
  blocked:Boolean,
  limited:Boolean,
  limitWeekend:Number,
  limitWeekdays:Number,

});

var Appdata = mongoose.model('appdata', AppSchema);

module.exports = Appdata;