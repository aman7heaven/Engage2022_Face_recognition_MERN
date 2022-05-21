const mongoose=require('mongoose')
const MongoClient=require('mongodb').MongoClient


const AttendanceSchema=mongoose.Schema({

    Name:String,
    Date:String,
    Time:String,
    Status:String

},{db:'Students_data'})

module.exports=mongoose.model('Schema',AttendanceSchema)
