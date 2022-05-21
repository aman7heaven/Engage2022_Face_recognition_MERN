
const asyncHandler=require('express-async-handler')  
const { append } = require('express/lib/response')
//const StudentSchema=require('../model/attendanceModel')

const mongoose=require('mongoose')
var AttendanceSchema=new mongoose.Schema({

    Name:String,
    Date:String,
    Time:String,
    Status:String

},{collection:'Attendance_record'});

//module.exports=mongoose.model('Schema',AttendanceSchema)
const Schema=mongoose.model('Schema',AttendanceSchema)


const Home=asyncHandler(async(req,res)=>{
res.send('home page')
})

const MarkAttendance=asyncHandler(async(req,res)=>{
res.send('Attendance marked')
})

const Dashboard= asyncHandler(async(req,res) =>{
   
    Schema.find({},function(err,Attendance_record){
      res.send(Attendance_record)
    })
    

     
    
})

const DeleteAttendance= asyncHandler(async(req,res) =>{
    res.send(`Delete students Attendance ${req.params.id}`)
   })


module.exports={
    Home,
    MarkAttendance,
    Dashboard,
    DeleteAttendance,
}

