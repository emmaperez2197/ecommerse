const schema = require('../schemas/registrar')

const validateRegistro = (req, res, next) =>{
    const {error} = schema.create.validate(req.body);

    error ? res.status(422).json({message:'datos incorrectos'}) : next()

}

module.exports = {
    validateRegistro
}