const mongoose = require('mongoose');
const CoverageSchema = mongoose.Schema(
    {
        coverageName: { type: String, required: true },
    },
    { versionKey: false }
);
const CoverageModel = mongoose.model('coverages', CoverageSchema);
module.exports = CoverageModel;
