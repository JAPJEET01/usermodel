const router = require("express").Router()
const TecController = require("../api/teacher/teacherController")
const StuController = require("../api/student/StudentController")
const UserController = require("../api/user/userController")

router.post("/loginteacher",UserController.LoginTec)
router.use(require("../middleware/admincheck"))
router.post("/addteacher",TecController.AddTec)
router.post("/addstudent",StuController.AddStu)

module.exports = router