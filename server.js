require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const cors = require("cors")


const authRouter = require("./routes/authRouter")
const staffRouter = require("./routes/staffRouter")
const flightRouter = require("./routes/flightRouter")
const terminalRouter = require("./routes/terminalRouter")
const taskRouter = require("./routes/taskRouter")
//const taskRouter = require("./routes/taskRouter")

const PORT = process.env.PORT || 3001

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const db = require("./db")

const app = express()

app.use(cors())
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use("/auth", authRouter)
app.use("/staff", staffRouter)
app.use("/flights", flightRouter)
app.use("/tasks", taskRouter)
app.use("/terminal", terminalRouter)

app.use("/", (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
