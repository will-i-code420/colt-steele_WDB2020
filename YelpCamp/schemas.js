const Joi = require('joi');

module.exports = {

    campgroundSchema: Joi.object({
        campground: Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required().min(0),
            image: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required()
        }).required()
    }),

    reviewSchema: Joi.object({
        review: Joi.object({
            body: Joi.string().required(),
            rating: Joi.number().required().min(1).max(5)
        }).required()
    }),

    userSchema: Joi.object({
        user: Joi.object({
            username: Joi.string().min(3).max(24).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        }).required()
    })
};