const schema = require('../schemas/validateObjectId');

const validateId =  (req, res, next) =>{
    const {error} = schema.create.validate(req.params)
    error ? res.status(422).json({message:'datos incorrectos'}) : next()
}

module.exports = {validateId}