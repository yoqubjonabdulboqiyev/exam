const { create, getAll, getById, update, deleted } = require("../controller/feedback")
const auth = require("../middleware/auth")
const uploads = require("../middleware/uploads")
const router = require("express").Router()



router.post("/feedback", uploads, create)
router.get("/feedback/all", getAll)
router.get("/feedback/:id", getById)
router.put("/feedback/:id", auth, uploads, update)
router.delete("/feedback/:id", auth, deleted)

module.exports = router;