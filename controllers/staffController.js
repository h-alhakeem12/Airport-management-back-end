const User = require("../models/User")

const getStaff = async (req, res) => {
  try {
    const staffMembers = await User.find({ role: "staff" })
    res.json(staffMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const Register = async (req, res) => {
  try {
    const { name, email, password, role, jobTitle } = req.body
    const role = req.body.role.toLowerCase()

    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).send("User already exists")
    }

    const user = await User.create({
      name,
      email,
      passwordDigest,
      role,
      jobTitle: jobTitle.toLowerCase(),
    })

    res.status(201).send(user)
  } catch (error) {
    console.error("Register Error:", error)
    res.status(500).send({ msg: "Internal Server Error", error: error.message })
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
