const {model, Schema} = require('mongoose')


const ProductSchema = Schema({
    
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    condition :{
        type: String,
        default: 'new'
    },

    description: {
        type: String,
        required: false
    },
});

module.exports = model('products', ProductSchema)