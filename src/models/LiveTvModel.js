const mongoose = require('mongoose');
const ChannelSchema = mongoose.Schema(
    {
        channelName: { type: String, required: true },
        image: { type: String },
        link: { type: String, required: true },
    },
    { versionKey: false }
);
const ChannelModel = mongoose.model('channels', ChannelSchema);
module.exports = ChannelModel;
