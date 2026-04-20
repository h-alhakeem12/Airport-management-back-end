const router = require("express").Router()
const staffController = require("../controllers/staffController")
const middleware = require("../middleware")

router.get("/", staffController.getStaff)
router.get("/admin", staffController.getAdmin)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  staffController.Register
)
router.get("/:id", staffController.getStaffById)
router.put("/:id", staffController.updateStaff)
router.delete("/:id", staffController.deleteStaff)

module.exports = router
