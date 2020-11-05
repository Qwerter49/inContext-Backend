const express = require("express")
const app = express()
const http = require("http")
const socketIO = require("socket.io")
const httpApp = http.createServer(app)
const io = socketIO(httpApp)

io.on("connection", socket => {
    console.log("Someone connected!")
    socket.on("message", message => {
        console.log("Someone sent a message!", message)
    })
})

httpApp.listen(3000)