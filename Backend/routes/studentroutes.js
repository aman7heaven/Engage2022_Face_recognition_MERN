const express = require('express')
const router=express.Router()
const {Home,MarkAttendance,Dashboard,DeleteAttendance,RegisterAdmin,SigninAdmin}=require('../controllers/StudentControllers') 
const User = require('../model/userModel');
var cors = require('cors')
const app=express();
app.use(cors())

router.get('/',Home)

router.get('/Dashboard', Dashboard)

router.get('/MarkAttendance',MarkAttendance)
 
router.delete('/Dashboard/:id', DeleteAttendance)

router.post('/Signup',async(req,res)=>{
    
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

router.post('/signin',SigninAdmin)


module.exports=router