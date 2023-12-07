const express =require('express')
const mongoose= require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DataBase Connected")
});


const app= express();

app.listen(process.env.PORT,()=>{
    console.log("Server Connected.")
})