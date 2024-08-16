const express = require('express');
const app = express();
const connectDb = require('./config/db')
require('dotenv').config({ path: './src/.env' });



connectDb();

//controllers
const userController = require("./controller/UserController");
const AppError = require('./errorHandlers/AppErrorHandler');
const tagController =  require('./controller/TagController')


app.use(express.json())

app.use("/user",userController)
app.use("/tag",tagController)



// Global error-handling middleware
function globalErrorHandler(err, req, res, next) {
    // Default values
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    let errorCode = err.errorCode || 'UNKNOWN_ERROR';
    let errorDetails = err.details || err.message;

    // Handle specific Mongoose CastError
    if (err.name === 'CastError') {
        errorCode = 'CAST_ERROR';
        errorDetails = `Invalid value for ObjectId: ${err.value}. Expected a 24-character hexadecimal string.`;
        err.statusCode = 400; // Bad Request
        err.status = 'fail';
    }

    // If it's an instance of AppError, handle it
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            statusCode:err.statusCode,
            errorMessage: errorDetails,
            errorCode: err.errorCode,
            details: err.details,
            timestamp: new Date().toISOString(),
        });
    }

    // For any other errors, return a generic 500 error
    res.status(err.statusCode).json({
        status: err.status,
        errors: errorDetails,
        errorCode: errorCode,
        details: err.details || null,
        timestamp: new Date().toISOString(),
    });
}

app.use(globalErrorHandler);




const PORT = 8877;
app.listen(PORT,()=> console.log(`server running at port ${PORT}`))