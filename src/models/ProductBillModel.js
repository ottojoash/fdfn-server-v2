const mongoose = require('mongoose');
const ProductBillSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        productName: { type: String, required: true },
        productPrice: { type: String, required: true },
        image: { type: String, required: true },
        status: { type: String, required: true },
        createOrderDate: { type: String, required: true },
        updateOrderDate: { type: String, required: true },
    },
    { versionKey: false }
);
const ProductBillModel = mongoose.model('productbill', ProductBillSchema);
module.exports = ProductBillModel;
