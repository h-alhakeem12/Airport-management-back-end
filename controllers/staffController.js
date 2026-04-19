const User = require("../models/User")

const getStaff = async (req, res) => {
  try {
    const staffMembers = await User.find({ role: "staff" })
    res.json(staffMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
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
    const updatedStaff = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
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
  deleteStaff
}
