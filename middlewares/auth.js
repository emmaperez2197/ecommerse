const { decodeToken } = require('../services/token');


const secureUser = (req, res, next) => {

    try {
        
        const { authorization } = req.headers

      const {_id} = decodeToken(authorization)
      
      req.id = _id
      next();
    } catch (e) {
        console.log(e);
        res
        .status(401)
         .json({message: 'Unauthorized', img:"https://http.cat/401" })
    }

};

module.exports = {
    secureUser
}

 