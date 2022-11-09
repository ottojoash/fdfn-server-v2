const MovieModel = require('../models/MovieModel');

exports.createMovie = (req, res) => {
    const url = req.get('host');
    const protocol = req.protocol;
    const image = protocol + url + '/images/' + req.file.filename;
    const channelData = req.body;
    const channel = { ...channelData, image };
    MovieModel.create(channel, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readMovie = (req, res) => {
    MovieModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteMovie = (req, res) => {
    let id = req.body['id'];

    MovieModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
