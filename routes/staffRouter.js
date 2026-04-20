const router = require("express").Router()
const staffController = require("../controllers/staffController")

router.get("/", staffController.getStaff)
router.get("/admin", staffController.getAdmin)
router.post("/", staffController.Register)

router.put("/:id", staffController.updateStaff)

router.delete("/:id", staffController.deleteStaff)
module.exports = router
