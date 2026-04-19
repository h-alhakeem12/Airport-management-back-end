const Terminal = require("../models/Terminal")
const getTerminal = async (req, res) => {
  try {
    const terminal = await Terminal.find({})
    res.send(terminal)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getTerminalById = async (req, res) => {
  try {
    const terminal = await Terminal.findById(req.params.id)
    if (terminal) {
      res.send(terminal)
    } else {
      res.send("Terminal not found")
    }
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const addTerminal = async (req, res) => {
  try {
    const newTerminal = await Terminal.create(req.body)
    res.send(newTerminal)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateTerminal = async (req, res) => {
  try {
    const updateTerminal = await Terminal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updateTerminal) {
      return res.status(404).send({ message: "Terminal not found" })
    }
    res.send(updateTerminal)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const deleteTerminal = async (req, res) => {
  try {
    const deleteTerminal = await Terminal.findByIdAndDelete(req.params.id)
    if (!deleteTerminal) {
      return res.status(404).send({ message: "Terminal not found" })
    }
    res.send({ message: "Terminal deleted successfully" })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  getTerminal,
  getTerminalById,
  addTerminal,
  updateTerminal,
  deleteTerminal,
}
