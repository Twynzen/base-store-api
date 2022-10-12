//middlegare de tipo error
function logErrors(err, req, res, next) {
    console.log('LogErrors');
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next) {
    console.log('ErrorHandler');
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = { logErrors, errorHandler }
