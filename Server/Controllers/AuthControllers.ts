import { Request , Response } from "express"
const bcrypt= require('bcrypt')
import User from '../Models/UserModel'

export const signUp=async (req:Request,res:Response)=>{
    const {username,password,email} =req.body
    const hashedPassword=bcrypt.hashSync(password,12)
    const newUser=await new User({username,password:hashedPassword,email});
    try{
        await newUser.save()
        res.json("User Saved Successfull!").status(200)
    }
    catch(err){
        res.status(404).json(err)
    }
    
}
