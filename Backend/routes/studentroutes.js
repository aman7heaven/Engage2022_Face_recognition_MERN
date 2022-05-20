const express = require('express')
const router=express.Router()
const {getAttendance,DeleteAttendance}=require('../controllers/StudentControllers')

router.get('/', getAttendance)
 
router.delete('/:id', DeleteAttendance)






module.exports=router