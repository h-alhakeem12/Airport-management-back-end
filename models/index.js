const mongoose = require("mongoose")
const flightSchema = require("./Flight")
const taskSchema = require("./Task")
const terminalSchema = require("./Terminal")
const userSchema = require("./User")

const Flight = mongoose.model("flight", flightSchema)
const Task = mongoose.model("task", taskSchema)
const Terminal = mongoose.model("terminal", taskSchema)
const User = mongoose.model("user", taskSchema)

module.exports = {
  Flight,
  Task,
  Terminal,
  User,
}
