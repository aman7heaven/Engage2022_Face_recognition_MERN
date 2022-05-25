
const asyncHandler=require('express-async-handler');
const { append } = require('express/lib/response');
const StudentSchema=require('../model/userModel');
const jwt= require('jsonwebtoken');
const express=require('express');
const app=express();
const ejs=require('ejs');
app.set('view engine','ejs');
var cors = require('cors')
//This is attendance Model
const mongoose=require('mongoose');
const User = require('../model/userModel');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs/dist/bcrypt');
var AttendanceSchema=new mongoose.Schema({

    Name:String,
    Date:String,
    Time:String,
    Status:String

},{collection:'Attendance_record'});

const Schema=mongoose.model('Schema',AttendanceSchema)




app.use(cors())

const Home=asyncHandler(async(req,res)=>{
res.send('home page')
});

const MarkAttendance=asyncHandler(async(req,res)=>{
res.send('Attendance marked')
});

const Dashboard= asyncHandler(async(req,res) =>{
   
    Schema.find({},function(err,Attendance_record){
      res.send(Attendance_record)
    })
    
});

const DeleteAttendance= asyncHandler(async(req,res) =>{
    res.send(`Delete students Attendance ${req.params.id}`)
   });

   const RegisterAdmin= asyncHandler(async(req,res)=>{
    
    const {username,email,password,cpassword}=req.body;

    if(!username || !email || !password || !cpassword){
        return res.status(422).json({error:"Please fill all the form fields"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"Password does not match"});
        }
        else{
        const user=new User({username,email,password,cpassword})

        user.save().then(()=>{
           
            return res.status(201).json({message:"register done"});
           
        }).catch((err)=>res.status(500).json({error:"Failed to register user"}))

    }

    }).catch(err => {console.log(err);})

  //  res.json({message:req.body})

});

//Signin route

const SigninAdmin=asyncHandler(async(req,res)=>{

    console.log("ITS HERE ");
   // res.json({message:"awesome"});

   try{
    
    const { email,password }=req.body;
    if(!email || !password){
        return res.status(400).json({error:"Pleas fill all the details"});
    }

    const userLogin=await User.findOne({email:email});

    if(userLogin){
      
    const isMatch=await bcrypt.compare(password,userLogin.password);
    const token=await userLogin.generateAuthToken();
    console.log(token);
    res.cookie("jswtoken",token,{
        expires:new Date(Date.now() + 25892000000),
        httpOnly:true
    });

    if(!isMatch){
        
        res.status(400).json({message:"Invalid Credentials"});

    }else{
        console.log("not working");
        res.redirect("http://localhost:3000/Dashboard")
       
    }

    } else{
        
        res.status(400).json({message:"Invalid Credentials"});
    }
    
  
   }catch(err){
       console.log(err);
   }

});


module.exports={
    Home,
    MarkAttendance,
    Dashboard,
    DeleteAttendance,
    RegisterAdmin,
    SigninAdmin
}

