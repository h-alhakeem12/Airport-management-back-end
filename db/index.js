const mongoose = require("mongoose")
require("dotenv").config()
const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
  console.log(`Successfully connected to MongoDB database . . .`)
})

module.exports = mongoose
