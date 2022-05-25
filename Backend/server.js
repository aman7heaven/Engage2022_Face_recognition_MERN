const express=require ('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
const connectDB=require('./config/db')
const MongoClient=require('mongodb').MongoClient

connectDB()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',require('./routes/studentroutes'))


app.listen(port,() =>console.log(`server started on port ${port}`))



