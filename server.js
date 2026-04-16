require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const morgan = require("morgan")
const cors = require("cors")

const authRouter = require("./routes/authRouter")
const flightRouter = require("./routes/flightRouter")
//const taskRouter = require("./routes/taskRouter")

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const db = require("./db")

const PORT = process.env.PORT || 3001

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected for Airport System"))
  .catch((err) => console.log("Mongo connection error:", err))

// Routes
app.use("/auth", authRouter)
app.use("/flights", flightRouter)
//app.use("/tasks", taskRouter)

app.get("/", (req, res) => {
  res.json({ message: "Airport Management API is running..." })
})

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
