const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const schema = {
    create : Joi.object({
        id: Joi.objectId().required()
    })
}

module.exports = schema