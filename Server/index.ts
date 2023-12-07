const express =require('express')
const mongoose= require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
import userRoutes from './Routes/UserRoutes'
import authRoutes from './Routes/AuthRoutes'
mongoose.connect(process.env.DATABASE).then(()=>{
    console.log("DataBase Connected")
});


const app= express();
app.use(express.json())
app.listen(process.env.PORT,()=>{
    console.log("Server Connected.")
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)