const User = require("./userMoldel")
const bcrypt = require("bcrypt")
const secret = 'japjeet' 
const jwt = require("jsonwebtoken")
exports.LoginTec=(req,res)=>{
    User.findOne({email:req.body.email})
    .then(data=>{
        if(data != null){
            if(bcrypt.compareSync(req.body.password,data.password)){
                let payload ={
                    email: data.email,
                    name: data.name,
                    UserType: data.UserType
                }
            var token = jwt.sign(payload,secret,{expiresIn  :60*60*24*364})
            res.json({
                status :200,
                success:true,
                Message:"Login Successful",
                data:token
            })
            }
            else{
                res.json({
                    status :200,
                    success:true,
                    Message:"Indvali UserName And Password Plsease try again",
                    
                })
            }
        }
        else{ 
            res.json({
            status :200,
            success:true,
            Message:"Indvali UserName And Password Plsease try again",
            
        })}
    })
}