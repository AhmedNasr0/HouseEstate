import { signUp } from "../Controllers/AuthControllers";
import { Response,Request } from "express";
const express=require('express')
const router=express.Router();

router.route('/signup').get((req:Request,res:Response)=>{res.send('logged')}).post(signUp)

export default router
