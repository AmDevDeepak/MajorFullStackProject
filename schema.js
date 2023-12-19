//schema validator
const Joi = require('joi');

const listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
    }).required()
});


//Schema validation for reviews
const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        comment: Joi.string().required() // Use 'comment' with a lowercase 'c'
    }).required()
});

module.exports.reviewSchema = reviewSchema;
module.exports.listingSchema = listingSchema;