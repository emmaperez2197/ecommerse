const jwt = require('jsonwebtoken');
const singOptions = { expiresIn: "8h", algorithm: "HS256" };

const createToken = (paylaoad) =>  jwt.sign(paylaoad, 'emmA777@RicO$', singOptions)

const decodeToken = (token) => jwt.verify(token, 'emmA777@RicO$' );
    

    // const [, JWT] = token.split('');
    // const validToken= jwt.verify(JWT, 'emmA777@RicO$' );
    // return validToken



module.exports = {
    createToken,
    decodeToken
}  

