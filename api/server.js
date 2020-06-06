const express = require("express")
const helmet = require("helmet")   
const cors = require("cors")
const restricted = require("../auth/restricted.js")

//routers
const usersRouter = require("../users/users-router.js")
const authRouter = require("../auth/auth-router.js")
const itemsRouter = require("../items/items-router.js")

const server = express()

server.use(express.json())
server.use(logger)
server.use(cors())
server.use(helmet())

//routes
server.use("/api/users", logger, restricted, usersRouter)
server.use("/api/auth", logger, authRouter)
server.use("/api/items", logger, restricted, itemsRouter)

server.get("/", (req, res) =>{
    res.status(200).json({message: "Welcome to the Trader Joe's Shopping List API"})
})

module.exports = server

// logger middleware
function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
        'Origin'
      )}`
    );
  
    next();
  }