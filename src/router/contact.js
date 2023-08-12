const { create, getById, getAll, update, deleted } = require("../controller/contact");
const auth = require("../middleware/auth")

const router = require("express").Router()


router.post("/contact", create)
router.get("/contact/all", auth, getAll)
router.get("/contact/:id", auth, getById)
router.put("/contact/:id", auth, update)
router.delete("/contact/:id", auth, deleted)



module.exports = router;