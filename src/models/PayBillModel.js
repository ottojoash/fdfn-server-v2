const mongoose = require('mongoose');
const PayBillSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        userId: { type: String, required: true },
        phone: { type: String, required: true },
        totalPay: { type: String, required: true },
        trxId: { type: String, required: true },
        status: { type: String, default: 'New' },
    },
    { versionKey: false }
);
const PayBillModel = mongoose.model('paybills', PayBillSchema);
module.exports = PayBillModel;
