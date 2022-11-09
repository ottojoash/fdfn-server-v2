const RegModel = require('../models/RegModel');

exports.createRegPackage = (req, res) => {
    const regBody = req.body;
    RegModel.create(regBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readRegPackage = (req, res) => {
    RegModel.find({})
        .sort({ createRegDate: -1 })
        .exec((err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                res.status(200).json({ status: 'success', data: data });
            }
        });
};

exports.updateRegPackage = (req, res) => {
    let id = req.body['id'];
    let status = req.body['status'];
    let updateRegDate = req.body['updateRegDate'];

    const updateRegData = {
        status,
        updateRegDate,
    };

    RegModel.updateOne({ _id: id }, { $set: updateRegData }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteRegPackage = (req, res) => {
    let id = req.body['id'];

    RegModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readRegPackageByEmail = (req, res) => {
    let email = req.query['email'];

    RegModel.find({ email: email }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
