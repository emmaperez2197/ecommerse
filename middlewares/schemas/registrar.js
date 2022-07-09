const Joi = require('joi');


const schema = {
    create : Joi.object({
        "email": Joi.string().email().required(),
        "password": Joi.string().required(),
        "name": Joi.string().required(),
        "lastname": Joi.string().required(),
    })
}

module.exports = schema