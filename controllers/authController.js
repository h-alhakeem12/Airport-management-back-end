const User = require("../models/User")
const middleware = require("../middleware")

const Register = async (req, res) => {
  try {
    const { name, email, password, role, jobTitle } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.exists({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!")
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

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      password,
      user.passwordDigest
    )
    if (matched) {
      let payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!" })
  }
}
const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
const getAll = async (req, res) => {
  try {
    const user = await User.find({})
    res.send(user)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  Register,
  Login,
  checkSession,
  getAll,
}
