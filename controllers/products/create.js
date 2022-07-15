const Product = require('../../models/products/Product');

const create = async (req, res) => {

	const createProduct = new Product(req.body);
	try {

		const saveProduct = await createProduct.save();
		return res.status(201).json(saveProduct);
	} catch(error) {
		return res.status(500).json({ message: error.toString() });
	}
};

module.exports = {
	create
};
