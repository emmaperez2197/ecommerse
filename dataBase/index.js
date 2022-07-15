const mongoose = require('mongoose');

class MoongoseConnect {

	static async connect() {
		await mongoose.connect('mongodb://localhost:27017/db_ecommerse', {
			useNewUrlParser: true
		});
		console.log('connected to database');
	}
}

module.exports = MoongoseConnect;
