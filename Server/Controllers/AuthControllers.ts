import { Request , Response, response } from "express"
const bcrypt= require('bcrypt')
import User from '../Models/UserModel'
import { errorHandler } from "../utils/errorHandler"

import jwt from 'jsonwebtoken';
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
export const signin=async(req:Request,res:Response,next:any)=>{
    const {email,password} =req.body
    try{
        const validUser=await User.findOne({email})
        if(!validUser) return res.json("User not found !")
        const validPass=bcrypt.compareSync(password,validUser.password)
        if (!validPass) return res.json("Wrong password")
        const token=jwt.sign({_id:validUser._id}, "123rfca5dx5w") 
        const {password:pass,...rest} = validUser._doc
        res.cookie('access Token',token,{httpOnly:true}).status(200).json(rest)
    }
    catch(error){
        res.json(next(error))
    }
    
}