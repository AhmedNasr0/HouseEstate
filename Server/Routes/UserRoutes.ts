const express=require('express')
const router=express.Router();
import { getUser } from "../Controllers/userControllers";

router.get('/getuser',getUser)

export default router