const mongoose = require('mongoose');
const MemberSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        image: { type: String },
    },
    { versionKey: false }
);
const MemberModel = mongoose.model('members', MemberSchema);
module.exports = MemberModel;
