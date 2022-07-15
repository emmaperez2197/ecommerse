const User = require('../../models/user/User');
const { hash } = require('../../utils/bcrypt');

const registrar = async (req, res) => {

	const { email, password } = req.body;

	try {

		const emailFindById = await User.findOne({ email });

		if(emailFindById)
			return res.status(200).json({ message: 'Este email ya existe, ingrese otro' });

		const createUser = new User(req.body);

		createUser.password = hash(password);
		const userSave = await createUser.save();
		res.status(201).json({ message: userSave._id });

	} catch(error) {
		return res.status(500).json({ message: error.toString() });
	}
};

module.exports = { registrar };
