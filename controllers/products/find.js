
const Product = require('../../models/products/Product');


const findProducts = (req, res) =>{

    try {
        
    } catch (error) {
        return  res.status(500).json({ message: error.toString() })
    }

}

module.exports = {
    findProducts
}