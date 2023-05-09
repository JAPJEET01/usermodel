module.exports =(req,res,next)=>{
    let headers = req.headers['authorization']
    if (headers == undefined || headers == null ){
        res.json({
            status:401,
            success :false,
            message:"NOT ALLOWED TO USE"
        })
    }
    else{  
     next()
    }
}