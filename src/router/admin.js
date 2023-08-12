const { register, login } = require("../controller/admin");
const auth = require("../middleware/auth")
const router = require("express").Router()
const uploads = require("../middleware/uploads")

router.post("/admin/register", uploads, register)
router.post("/admin/login", login)


module.exports = router;