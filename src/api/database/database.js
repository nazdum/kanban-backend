const mongoose  = require("mongoose");

const {DB_USERNAME , DB_PASSWORD , DB_NAME, URI} = require('./database.config')

const startConnection = async () => {
    
    try{
    console.log("Connecting to DB...")
    
    let connection = await mongoose.connect(URI)
    console.log("Connected to DB")
    }
    catch(error){
        console.log({"error":error})
    }

}

startConnection()

module.exports = mongoose