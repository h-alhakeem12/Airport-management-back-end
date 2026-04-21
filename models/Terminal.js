const mongoose = require("mongoose")

const terminalSchema = new mongoose.Schema(
  {
    terminalName: { type: String, required: true },
    gateNumber: { type: String, required: true },
    location: { type: String, required: true },
    isOperational: { type: String, default: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Terminal", terminalSchema)
