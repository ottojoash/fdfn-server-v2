const mongoose = require('mongoose');
const NotificationSchema = mongoose.Schema(
    {
        notificationText: { type: String, required: true },
    },
    { versionKey: false }
);
const NotificationModel = mongoose.model('notification', NotificationSchema);
module.exports = NotificationModel;
