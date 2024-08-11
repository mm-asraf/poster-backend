class DatabaseConnectionErrorHandler extends Error{

    constructor(message,status,statusCode,errorDetails = null){
        super(message)
        this.status = status;
        this.statusCode = statusCode;
        this.errorDetails = errorDetails;

        Error.captureStackTrace(this,this.constructor)
    }

}

module.exports = DatabaseConnectionErrorHandler;