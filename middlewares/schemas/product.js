const Joi = require('joi');


const schema = {
    create:  Joi.object({
    title: Joi.string().min(3).max(20).required(),
    price: Joi.number().integer().required(),
    condition: Joi.string().required().valid('new', 'used')

    })
}
module.exports = schema