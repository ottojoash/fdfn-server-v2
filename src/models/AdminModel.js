const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema(
    {
        adminEmail: { type: String, required: true },
        adminRole: { type: String, required: true },
        adminCreateDate: { type: String },
    },
    { versionKey: false }
);

const AdminModel = mongoose.model('admins', AdminSchema);
module.exports = AdminModel;
