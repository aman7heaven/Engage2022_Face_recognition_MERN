const express=require('express')
const asyncHandler=require('express-async-handler')
const StudentSchema=require('../model/attendanceModel')
const db=require('../config/db')
const { collection } = require('../model/attendanceModel')
const res = require('express/lib/response')


const Home=asyncHandler(async(req,res)=>{
res.send('home page')
})

const MarkAttendance=asyncHandler(async(req,res)=>{
res.send('Attendance marked')
})

const Dashboard= asyncHandler(async(req,res) =>{
   
   StudentSchema.find({},function(Attendance_record){
       
     res.json(Attendance_record)

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

