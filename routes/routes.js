const router = require("express").Router()
const TecController = require("../api/teacher/teacherController")
const StuController = require("../api/student/StudentController")
const UserController = require("../api/user/userController")


router.post("/addteacher",TecController.AddTec)
router.post("/loginteacher",UserController.LoginTec)
router.post("/addstudent",StuController.AddStu)

module.exports = router