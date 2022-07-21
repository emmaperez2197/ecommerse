 const User = require('../../models/user/User');

const {anHash}= require('../../utils/bcrypt')
const {createToken} = require('../../services/token')

const login = async (req, res) => {

    const { email, password} = req.body;

    try {
        const loginUser =  await User.findOne( { email: email}, {password: 1} );
        const validatePassword = anHash(password, loginUser.password)

        console.log(loginUser._id);
        const JWTObject = { 
            id: login._id,
            email
        }

        const JWT = createToken(JWTObject)

        if (!validatePassword) {
            return res.status(200).json({message: 'email o contraseña incorrectos, intentelo de nuevo!'})
        }
        
        return res.status(200).json({ message: ' Bienvenido!', JWT })
    } catch (error) {
        return res.status(500).json({ message: error.toString() })
    }
}

module.exports = {
    login
}
