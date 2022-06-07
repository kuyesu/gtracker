const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    error.message = err.message

    const statusCode = res.statusCode ? res.statusCode : 500
    
    // Log to console for dev
    console.log(err)

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`
        error = handleCastErrorDB(message)
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = `Duplicate field value entered`
        error = handleDuplicateFieldsDB(err, message)
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = `Invalid field value entered`
        error = handleValidationErrorDB(err, message)
    }

    // Send response
    res.status(statusCode)
    res.json({
        success: false,
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    })
}


module.exports = errorHandler