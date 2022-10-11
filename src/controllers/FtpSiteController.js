const FtpSiteModel = require('../models/FtpSiteModel');

exports.createFtpSite = (req, res) => {
    const url = req.get('host');
    // get protocol
    const protocol = req.protocol;
    const image = protocol + url + '/images/' + req.file.filename;
    const ftpData = req.body;
    const ftp = { ...ftpData, image };
    FtpSiteModel.create(ftp, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readFtpSite = (req, res) => {
    FtpSiteModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteFtpSite = (req, res) => {
    let id = req.body['id'];

    FtpSiteModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
