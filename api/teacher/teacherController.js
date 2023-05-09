const Teacher = require("./teacherMoldel")
const User = require("../user/userMoldel")
const bcrypt = require("bcrypt")
const saltrounds = 10
exports.AddTec=(req,res)=>{   
    Teacher.findOne({name:req.body.name})
    .then(data=>{
        if(data!=null){
            res.json({
                status:401,
                success:false,
                message:"TEACHER ALREADY EXIST"
            })
    
        }


        else{
            let tecObj = new Teacher()
            tecObj.name = req.body.name,
            tecObj.email = req.body.email,
            tecObj.phone = req.body.phone,
            tecObj.save()
            .then(data=>{
                let userObj = new User()
                userObj.name = req.body.name,
                userObj.email = req.body.email,
                userObj.UserType=1
                userObj.password = bcrypt.hashSync(req.body.password,saltrounds)
                userObj.TeacherId= data._id
                userObj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success:true,
                        message: "Teacher Added Successfully",
                        data:data,
                        udata:udata
                    })  
                    
                })
                
            })



        }
    })
}

