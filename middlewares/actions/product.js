const schema = require('../schemas/product');

const validateSchema =  (req, res, next)=>{

    const {error, value } = schema.create.validate(req.body);
    error ? res.status(422).json({message:'datos incorrectos'}) : next()
}

module.exports = validateSchema