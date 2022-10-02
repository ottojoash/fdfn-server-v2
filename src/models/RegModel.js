const mongoose = require('mongoose');
const RegSchema = mongoose.Schema(
    {
        subscriberName: { type: String, required: true },
        authorizedName: { type: String, default: '' },
        email: { type: String, required: true },
        contactNumber: { type: String, required: true },
        nationalId: { type: String, default: '' },
        yourPhoto: { type: String, required: true },
        nidFront: { type: String, default: '' },
        nidBack: { type: String, default: '' },
        dateOfBirth: { type: String, default: '' },
        gender: { type: String, default: '' },
        occupation: { type: String, default: '' },
        fatherName: { type: String, default: '' },
        motherName: { type: String, default: '' },
        googleLocationPinPoint: { type: String, default: '' },
        address: { type: String, required: true },
        accountNumber: { type: String, required: true },
        totalPay: { type: String, required: true },
        trxId: { type: String, required: true },
        packageName: { type: String, required: true },
        price: { type: String, required: true },
        status: { type: String, required: true },
        createRegDate: { type: Date },
        updateRegDate: { type: Date },
    },
    { versionKey: false }
);
const RegModel = mongoose.model('registrations', RegSchema);
module.exports = RegModel;
