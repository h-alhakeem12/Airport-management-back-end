const User = require("../models/User")
const middleware = require("../middleware")

const getStaff = async (req, res) => {
  try {
    const staffMembers = await User.find({})
    res.json(staffMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const Register = async (req, res) => {
  try {
    const { name, email, password, role, jobTitle } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.exists({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!!")
    } else {
      const user = await User.create({
        name,
        email,
        passwordDigest,
        role,
        jobTitle,
      })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const getAdmin = async (req, res) => {
  try {
    const adminMembers = await User.find({ role: "admin" })
    res.json(adminMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getStaffById = async (req, res) => {
  try {
    const staff = await User.findById(req.params.id)
    if (!staff) return res.status(404).json({ message: "Member not found" })
    res.json(staff)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateStaff = async (req, res) => {
  try {
    const updatedStaff = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.json(updatedStaff)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteStaff = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: "Member not found" })
    res.json({ message: "Deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getStaff,
  getAdmin,
  getStaffById,
  updateStaff,
  deleteStaff,
  Register,
}
