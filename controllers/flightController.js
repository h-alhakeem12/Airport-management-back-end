const Flight = require("../models/Flight")

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find({})
      .populate("pilot", "name")
      .populate("terminal", "terminalName")
      .populate("createdBy", "name")
    res.json(flights)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id).populate(
      "pilot terminal"
    )
    if (!flight) return res.status(404).json({ message: "Flight not found" })
    res.json(flight)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addFlight = async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body)
    res.status(201).json(newFlight)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateFlight = async (req, res) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedFlight)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteFlight = async (req, res) => {
  try {
    const deleted = await Flight.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: "Flight not found" })
    res.json({ message: "Flight deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
}
