const mongoose = require('mongoose');
const FtpSiteSchema = mongoose.Schema(
    {
        ftpName: { type: String, required: true },
        image: { type: String },
        link: { type: String, required: true },
    },
    { versionKey: false }
);
const FtpSiteModel = mongoose.model('ftpsites', FtpSiteSchema);
module.exports = FtpSiteModel;
