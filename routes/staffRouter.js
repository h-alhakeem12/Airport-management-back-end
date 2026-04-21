const router = require("express").Router()
const staffController = require("../controllers/staffController")

router.get("/", staffController.getStaff)
router.get("/admins", staffController.getAdmin)
router.get("/:id", staffController.getStaffById)
router.put("/:id", staffController.updateStaff)
router.delete("/:id", staffController.deleteStaff)

module.exports = router
