const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'staff'],
    required: true
  },
  jobTitle: {
    type: String,
    enum: ['admin', 'pilot', 'Co-Pilot', 'Cabin Crew'],
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
