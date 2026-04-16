const router = require("express").Router()
const flightController = require("../controllers/flightController")

router.get("/", flightController.getFlights)
router.get("/:id", flightController.getFlightById)
router.post("/", flightController.addFlight)
router.put("/:id", flightController.updateFlight)
router.delete("/:id", flightController.deleteFlight)

module.exports = router
