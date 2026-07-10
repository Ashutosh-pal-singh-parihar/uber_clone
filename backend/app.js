const dotenv = require("dotenv")
dotenv.config()
const cookiePasrser = require('cookie-parser')
const cors = require('cors')
const express = require("express")
const connectToDB = require('./db/db')
const userRoutes = require("./routes/user.routes")
const captainRoutes = require('./routes/captain.routes')
const mapRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')

let app = express()

connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookiePasrser())

app.use("/users", userRoutes)
app.use("/captains", captainRoutes)
app.use("/maps", mapRoutes)
app.use('/rides', rideRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})


module.exports = app