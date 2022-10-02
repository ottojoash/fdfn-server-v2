const RegModel = require('../models/RegModel');

exports.createRegPackage = (req, res) => {
    const url = req.get('host');
    const yourPhoto = url + '/registration/' + req.files.yourPhoto[0].filename;
    const nidFront = url + '/registration/' + req.files.nidFront[0].filename;
    const nidBack = url + '/registration/' + req.files.nidBack[0].filename;
    const regBody = req.body;
    const status = 'New';
    const createRegDate = Date.now();
    const updateRegDate = Date.now();

    const RegData = {
        ...regBody,
        yourPhoto,
        nidFront,
        nidBack,
        status,
        createRegDate,
        updateRegDate,
    };
    // res.status(200).json({ status: 'success', data: RegData });
    RegModel.create(RegData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readRegPackage = (req, res) => {
    RegModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updateRegPackage = (req, res) => {
    let id = req.body['_id'];
    let status = req.body['status'];
    let updateRegDate = Date.now();

    const updateRegData = {
        status,
        updateRegDate,
    };

    RegModel.updateOne(
        { _id: id },
        { $set: updateRegData },
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

exports.deleteRegPackage = (req, res) => {
    let id = req.body['_id'];

    RegModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
