const router = require("express").Router()
const terminalController = require("../controllers/terminalController")

router.get("/", terminalController.getTerminal)
router.get("/:id", terminalController.getTerminalById)
router.post("/", terminalController.addTerminal)
router.put("/:id", terminalController.updateTerminal)
router.delete("/:id", terminalController.deleteTerminal)

module.exports = router
