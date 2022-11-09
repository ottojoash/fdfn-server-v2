const mongoose = require('mongoose');
const RegSchema = mongoose.Schema(
    {
        subscriberName: { type: String, required: true },
        authorizedName: { type: String, default: '' },
        email: { type: String, required: true, unique: true },
        contactNumber: { type: String, required: true },
        nationalId: { type: String, default: '' },
        yourPhoto: { type: String, default: '' },
        nidFront: { type: String, default: '' },
        nidBack: { type: String, default: '' },
        dateOfBirth: { type: String, default: '' },
        gender: { type: String, default: '' },
        occupation: { type: String, default: '' },
        fatherName: { type: String, default: '' },
        motherName: { type: String, default: '' },
        googleLocationPinPoint: { type: String, default: '' },
        address: { type: String, required: true },
        accountNumber: { type: String },
        totalPay: { type: String },
        trxId: { type: String },
        packageName: { type: String, required: true },
        totalMb: { type: String, required: true },
        price: { type: String, required: true },
        status: { type: String, default: 'pending' },
        createRegDate: { type: String },
        updateRegDate: { type: String },
    },
    { versionKey: false }
);
const RegModel = mongoose.model('registrations', RegSchema);
module.exports = RegModel;
