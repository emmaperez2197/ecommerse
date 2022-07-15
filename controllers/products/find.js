const Product = require('../../models/products/Product');

const findProducts = async (req, res) => {
	try {
		const buscarProducts = await Product.find();

		if(!buscarProducts)
			return res.status(402).json({ message: 'no hay productos disponibles' });

		return res.status(200).json(buscarProducts);
	} catch(error) {
		return res.status(500).json({ message: error.toString() });
	}
};
module.exports = {
	findProducts
};
