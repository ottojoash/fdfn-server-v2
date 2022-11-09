const PackagesModel = require('../models/PackagesModel');

exports.createPackage = (req, res) => {
    let reqBody = req.body;

    PackagesModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readPackages = (req, res) => {
    PackagesModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updatePackage = (req, res) => {
    let id = req.body['id'];
    let reqBody = req.body;

    PackagesModel.updateOne(
        { _id: id },
        { $set: reqBody },
        { upsert: true },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};

exports.deletePackage = (req, res) => {
    let id = req.body['id'];

    PackagesModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

// single packages
exports.readPackageId = (req, res) => {
    let id = req.params.id;

    PackagesModel.findById(id, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
