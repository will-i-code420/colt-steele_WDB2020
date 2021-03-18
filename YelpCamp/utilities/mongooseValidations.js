const { campgroundSchema, reviewSchema, userSchema } = require('../schemas');
const ExpressError = require('./ExpressError');

module.exports = {

    validateCampground: (req, res, next) => {
        const { error } = campgroundSchema.validate(req.body);
        if (error) {
            const msg = error.details.map(el => el.message).join(',')
            throw new ExpressError(msg, 400)
        } else {
            next();
        }
    },

    validateReview: (req, res, next) => {
        const { error } = reviewSchema.validate(req.body);
        if (error) {
            const msg = error.details.map(el => el.message).join(',')
            throw new ExpressError(msg, 400)
        } else {
            next();
        }
    },

    validateUser: (req, res, next) => {
        const { error } = userSchema.validate(req.body);
        if (error) {
            const msg = error.details.map(el => el.message).join(',')
            throw new ExpressError(msg, 400)
        } else {
            next();
        }
    }
}