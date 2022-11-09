const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        productName: { type: String, required: true },
        productPrice: { type: String, required: true },
        productDescription: { type: String, required: true },
        image: { type: String },
    },
    { versionKey: false }
);
const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
