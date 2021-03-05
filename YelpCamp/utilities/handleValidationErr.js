const ExpressError = require('./utilities/ExpressError');

module.exports.handleValidationErr = err => {
    console.dir(err);
    //In a real app, we would do a lot more here...
    return new ExpressError(`Validation Failed...${err.message}`, 400);
};