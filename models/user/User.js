const {model, Schema} = require('mongoose');


const UserSchema = Schema({

    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    shippingAddress: {
        type: Array,
        default: []
    },
    purchaseAddres: {
        type: Array,
        default: []
    }

});


module.exports = model('users', UserSchema);