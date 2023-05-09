const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/userModel")
.then(
    console.log("DB CONNECTD")
)