const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  status: { type: String, required: true },
  pilot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  terminal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Terminal",
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("Flight", flightSchema)
