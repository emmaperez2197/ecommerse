const Product = require('../../models/products/Product');

const findByIdProduct  = async(req, res) => {


    const {id} = req.params;
    
    try {
        const findByidProduct =  await Product.findById(id);
        if (!findByidProduct) {
            return  res.status(402).json({ message:  `no se encontro el producto con el id: ${req.params.id} `});
        }

        return res.status(200).json({findByidProduct})
    } catch (error) {
        return  res.status(500).json({ message: error.toString() })
    }
}
 module.exports = {
    findByIdProduct
}