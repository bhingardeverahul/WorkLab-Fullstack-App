const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
         },
        email:{
            type:String,
            required:true, 
            unique:true
        },
        password:{
            type:String,
            required:true, 
        },
        verify:{
            type:Boolean,
            default:false  
        },
    
    
})
const UserDemo=mongoose.model("UserDemo",UserSchema)
module.exports=UserDemo