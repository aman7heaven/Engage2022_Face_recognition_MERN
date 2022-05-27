import React from 'react'
import logo from '../assets/1.webp'

const Mark_attendance = () => {
  return (
    <div id="attendance">
       
       <div id='imgAttendance'>
       <img src={logo} alt="profile" id='newimg' />
       </div>
       <br></br>
       <br></br>
       
       <div class="AttendanceText"><p ><span>Click</span> on the given button to mark your attendance  <span><a href = "http://127.0.0.1:5000/"><button type="button" class="btn btn-warning btn-sm">Mark Attendance</button></a>
</span></p></div>

    </div>
  )
}

export default Mark_attendance