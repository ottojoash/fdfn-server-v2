const mongoose = require('mongoose');
const PackagesSchema = mongoose.Schema(
    {
        packageType: { type: String, required: true },
        packageName: { type: String, required: true },
        totalMb: { type: Number, required: true },
        price: { type: String, required: true },
        feature1: { type: String, required: true },
        feature2: { type: String, required: true },
        feature3: { type: String, required: true },
        feature4: { type: String, required: true },
    },
    { versionKey: false }
);
const PackagesModel = mongoose.model('packages', PackagesSchema);
module.exports = PackagesModel;
