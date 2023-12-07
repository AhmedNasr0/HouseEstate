const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    userName:{
        type:String,
        require:true
        ,unique:true
    },
    email:{
        type:String,
        require:true
        ,unique:true
    },
    password:{
        type:Number,
        require:true
        
    }},{timestamps:true});;

const User=mongoose.model('User',UserSchema);

export default User;