const ChannelModel = require('../models/LiveTvModel');

exports.createChannel = (req, res) => {
    const url = req.get('host');
    const protocol = req.protocol;
    const image = protocol + url + '/images/' + req.file.filename;
    const channelData = req.body;
    const channel = { ...channelData, image };
    ChannelModel.create(channel, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readChannel = (req, res) => {
    ChannelModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteChannel = (req, res) => {
    let id = req.body['id'];

    ChannelModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
