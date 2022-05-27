import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import profile from '../assets/logo2.png'
import email from '../assets/mail.jpg'
import pass from '../assets/password.jpg'
import Face from '../assets/FaceRecognitionTech.jpg'

const Login = () => {
const navigate=useNavigate();
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const loginUser= async(e) =>{

e.preventDefault();

  const res= fetch('/signin',{
    method:"POST",
    headers: {
      "Content-Type" : "application/json"
    },
    
    body: JSON.stringify({

      email,password
  
    })

  });
  console.log("ITS NOT HERE AGAIN")
  const data= res.json();
  navigate("/Dashboard");
  if(res.status===400 || !data){
    window.alert("INVALID CREDENTIALS");
  }else{
    window.alert("LOGIN SUCCESSS");
   
  }

}

  return (
   
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>


        </div>
        <div>
          <h1 className='loginpagetext'>Login</h1>
          <div>
         
            <input type="email" placeholder="email" className="name"  value={email}  onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="password" className="name" name="password" value={password}  onChange={(e)=>setPassword(e.target.value)}   />
          </div>
         <div className="login-button">
           <form method="POST">
      <NavLink to="/Dashboard"> <input type="submit" placeholder="Login" className="name"  value="Login" /* onClick={loginUser}*/  /> </NavLink> </form>
         </div>
          <div className='loginfooter'>
           <p className="link">
             <a href="#">Forgot password ?</a><span className='oroption'>OR</span><a href="#">Sign Up</a>
           </p>
           </div>

        </div>
      </div>
      

    </div>
   </div>
   

  )
}

export default Login