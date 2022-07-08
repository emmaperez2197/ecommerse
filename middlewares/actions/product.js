const schema = require('../schemas/product');

const validateCreate =  (req, res, next)=>{

    const {error, value } = schema.create.validate(req.body);
    error ? res.status(422).json({message:'datos incorrectos'}) : next()
}

module.exports = validateCreate