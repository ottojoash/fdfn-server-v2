const mongoose = require('mongoose');
const ProfileSchema = mongoose.Schema(
    {
        fullName: { type: String },
        email: { type: String },
    },
    { versionKey: false }
);
const ProfileModel = mongoose.model('profiles', ProfileSchema);
module.exports = ProfileModel;
