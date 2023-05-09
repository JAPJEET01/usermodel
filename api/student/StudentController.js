
const Student = require("./StudentModel")


exports.AddStu=(req,res)=>{   
    Student.findOne({name:req.body.name})
    .then(data=>{
        if(data!=null){
            res.json({
                status:401,
                success:false,
                message:"Student ALREADY EXIST"
            })
    
        }


        else{
            let tecObj = new Student()
            tecObj.name = req.body.name,
            tecObj.email = req.body.email,
            tecObj.phone = req.body.phone,
            tecObj.save()
            .then(data=>{
                res.json({
                    status:200,
                    success:true,
                    message:"Student ADDED SUCCESSFULLY",
                    data:data
                })  
            })
        }
    })
}

