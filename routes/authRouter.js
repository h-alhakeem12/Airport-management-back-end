const router = require("express").Router()
const controller = require("../controllers/authController")
const middleware = require("../middleware")

// router.post(
//   "/register",
//   middleware.stripToken,
//   middleware.verifyToken,
//   middleware.isAdmin,
//   controller.Register
// )
router.post("/login", controller.Login)

router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)

module.exports = router
