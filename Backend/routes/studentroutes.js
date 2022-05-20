const express = require('express')
const router=express.Router()
const {Home,MarkAttendance,Dashboard,DeleteAttendance}=require('../controllers/StudentControllers')

router.get('/',Home)

router.get('/Dashboard', Dashboard)

router.get('/MarkAttendance',MarkAttendance)
 
router.delete('/Dashboard/:id', DeleteAttendance)


module.exports=router