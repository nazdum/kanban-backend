const mongoose  = require("mongoose");

const {DB_USERNAME , DB_PASSWORD , DB_NAME}  = process.env;
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@nodeapps.atlbi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`


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