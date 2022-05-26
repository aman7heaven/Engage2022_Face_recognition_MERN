import React from 'react'
import homeai from '../assets/homeai.png'
import people from '../assets/people.png'
import dropbox from '../assets/dropbox.png'
import google from '../assets/google.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
const Home = () => {
  return (
    
  <div className="homeai">

    <div >
      
<div class="Hometext">
<p id='yo'><span id="let">Let's</span> Automate Attendance Management</p>
</div>
<br></br>
<br></br>

<div><p id="maintext">The primary objective of our Time and Attendance Management System is to offer an efficient and effective Biometrics based time and attendance management system. Our solution is designed adopting the state-ofthe-art technology rendering a scalable time attendance system based on facial recognition. Our solution is designed to assist the HR teams and School admins to manage attendance policies from remote locations also.</p></div>
<br></br>
<div id="people"> <img src={people} alt="profile" /><span id="maintext"> These many people requested a access visit in last 24 hours</span></div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div id="brands">
  <div><img src={dropbox} alt="profile" /></div>
  <div><img src={google} alt="profile" /></div>
  <div><img src={slack} alt="profile" /></div>
  <div><img src={shopify} alt="profile" /></div>
<div>
  
</div>

</div>
    </div>


    <div>
   <img src={homeai} alt="profile" class="Homeimg" />
   </div>

  

   </div>

    
  )
}

export default Home