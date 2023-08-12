const { create, getAll, getById, update, deleted } = require("../controller/service")
const auth = require("../middleware/auth")
const uploads = require("../middleware/uploads")
const router = require("express").Router()


router.post("/service", auth, uploads, create)
router.get("/service/all", getAll)
router.get("/service/:id", getById)
router.put("/service/:id", auth, uploads, update)
router.delete("/service/:id", auth, deleted)

module.exports = router;