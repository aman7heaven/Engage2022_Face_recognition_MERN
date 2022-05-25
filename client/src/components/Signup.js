import React from 'react'
import { useState,user } from 'react'
import bgImg from '../assets/possibility.png'
import { NavLink,useNavigate } from 'react-router-dom'



const Signup = () => {
  
const [user, setUser]= useState({

  username: "", email:"" , password:"" , cpassword:""

});

let name,value;
const handleInputs = (e)=>{

  console.log(e);
  name=e.target.name;
  value=e.target.value;

  setUser({...user,[name]:value})

}

const PostData= async(e) => {
 
e.PreventDefault();

const{ name , email , password , cpassword }= user ;

const res=await fetch("/Signup",{

  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },

  body: JSON.stringify({

    name,email,password,cpassword

  })
  
}).then()
console.log("REACHED HERE FINALLY");
const data=await res.json();

if(res.status === 422 || !data){
  window.alert("INVALID REGISTRATION")
  console.log('INVALID REGISTRATION')
}else{
  window.alert("Successfull REGISTRATION")
  console.log('successfull REGISTRATION')

 
}

}



  return (
    <>
    
  <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign up</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' method="POST">
                    <input type="text" name='username' id='username' placeholder='username' value={user.username} onChange={handleInputs}/>
                    <input type="email" name='email' id='email' placeholder='email' value={user.email} onChange={handleInputs} />
                    <input type="password" name='password' id='password' placeholder='password' value={user.password} onChange={handleInputs} />
                    <input type="password" name='cpassword' id='cpassword' placeholder='confirm password' value={user.cpassword} onChange={handleInputs} />
                   

         <input type="submit" name='signup' id='signup' className='form-submission' value='signup' onClick={PostData} /> 
                </form>

            </div>
            <div className="col-2">
               <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  
    </>
  )
}

export default Signup