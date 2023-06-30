
function createLoggerMiddleware(logger){
    return (req, res, next) => {
        // Log the name of the API being called
        logger.info(`API called: ${req.method} ${req.originalUrl}`);
        // Pass the control to the next middleware or route handler
        next();
    };
}


module.exports = createLoggerMiddleware;