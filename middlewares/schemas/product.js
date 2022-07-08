const Joi = require('joi');


const schema = {
    create:  Joi.object({
    title: Joi.string().min(3).max(20).required(),
    price: Joi.number().required(),
    condition: Joi.string().required().valid('new', 'used'),
    description: Joi.string().optional()

    })
}
module.exports = schema