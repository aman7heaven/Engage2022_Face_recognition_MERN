//shows students attendance
//get/dashboard

const Home=(req,res)=>{
res.send('home page')
}

const MarkAttendance=(req,res)=>{
res.send('Attendance marked')
}

const Dashboard= (req,res) =>{
 res.send('admin logs in here')
}

const DeleteAttendance= (req,res) =>{
    res.send(`Delete students Attendance ${req.params.id}`)
   }


module.exports={
    Home,
    MarkAttendance,
    Dashboard,
    DeleteAttendance,
}