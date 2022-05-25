const express=require ('express');
const { append } = require('express/lib/response');
const app=express()
app.post('/Singup',(req,res)=>{
    
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
