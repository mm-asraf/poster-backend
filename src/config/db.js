const mongoose = require('mongoose');
const DatabaseConnectionErrorHandler = require('../errorHandlers/DatabaseConnectionErrorHandler');


const connectDb = async(req,res)=> {

    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/posterDb");
        console.log(`mongoDb connected at ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
        throw new DatabaseConnectionErrorHandler("Database Connection failed",500,"Failed",error)
        process.exit(1);
        
    }

}

module.exports = connectDb;