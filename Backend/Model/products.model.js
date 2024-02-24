const mongoose = require('mongoose');
//Schema
const productsSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    price: {
        type: Number
    }
}, { timestamps: true})

module.exports = mongoose.model('products', productsSchema);


