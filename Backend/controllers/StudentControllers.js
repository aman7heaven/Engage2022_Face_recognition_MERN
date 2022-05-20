//shows students attendance
//get/dashboard
const getAttendance= (req,res) =>{
 res.send('show student attendance')
}

const setAttendance= (req,res)=>{
    console.log();
}
const DeleteAttendance= (req,res) =>{
    res.send(`Delete students Attendance ${req.params.id}`)
   }

module.exports={
    getAttendance,
    DeleteAttendance,
}