const mongoose=require('mongoose')
const MongoClient=require('mongodb').MongoClient


const AttendanceSchema={

    Name:String,
    Date:String,
    Time:String,
    Status:String

}

module.exports=mongoose.model('AttendanceSchema',AttendanceSchema)