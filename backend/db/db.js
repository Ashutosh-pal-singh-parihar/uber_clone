const mongoose = require('mongoose')


const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.error("error connecting to db ", error)
        process.exit(1)
    }
}

module.exports = connectToDB