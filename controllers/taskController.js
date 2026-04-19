const Task = require("../models/Task")
const User = require("../models/User")
const Flight = require("../models/Flight")

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).populate("assignedTo flight")
    res.send(tasks)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const getTaskById = async (req, res) => {
  try {
    const tasks = await Task.findById(req.params.id).populate(
      "assignedTo flight"
    )
    if (!tasks) {
      return res.status(404).send({ message: "Task not found" })
    }
    res.send(tasks)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const addTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body)
    res.status(201).send(newTask)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updateTask) {
      return res.status(404).send({ message: "Task not found" })
    }
    res.send(updateTask)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id)
    if (!deleteTask) {
      return res.status(404).send({ message: "Task not found" })
    }
    res.send({ message: "Task deleted successfully" })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
}
