const mongoose = require("mongoose")
const userSchema =  new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    StudentId:{type:mongoose.Types.ObjectId,default:null , ref:"Student"}, 
    TeacherId:{type:mongoose.Types.ObjectId,default:null , ref:"Teacher"}, 
    UserType:{type:Number ,default:2},//0=admin , 1= teacher , 2 = student
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},
})

module.exports= mongoose.model("User",userSchema)