const mongoose  = require("mongoose");

const URI = require('./database.config')

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

module.exports = {mongoose , startConnection}