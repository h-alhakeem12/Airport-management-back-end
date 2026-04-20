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

router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  staffController.updateStaff
)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  staffController.deleteStaff
)
module.exports = router
