const mongoose = require('mongoose');
const bcrypt= require ('bcryptjs');
const jwt=require('jsonwebtoken')
const userSchema= new mongoose.Schema({

    username: {

        type:String,
        required:true

    },

    email: {
        type: String,
        required:true
    },

    password: {
       
        type: String,
        required:true
    },

    cpassword : {
        type: String,
        required: true
    },

    tokens :[

        {
         
            token:{
                type: String,
                required: true
            }
        }
    ]

})

//we are hashing the password here

userSchema.pre('save', async function(next) {
       console.log('hi from inside');
    if(this.isModified('password')) {
       
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();

});

//We are generating token

userSchema.methods.generateAuthToken =async function(){
    try{

     let token= jwt.sign({_id:this.id},process.env.SECRET_KEY);
     this.tokens = this.tokens.concat({token : token});
     await this.save();
     return token;

    }catch(err){
        console.log(err);
    }
}





const User= mongoose.model('USER',userSchema);

module.exports=User;