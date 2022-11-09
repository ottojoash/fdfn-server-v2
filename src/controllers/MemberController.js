const MemberModel = require('../models/MemberModel');

exports.createMember = (req, res) => {
    let reqBody = req.body;

    MemberModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readMembers = (req, res) => {
    MemberModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updateMember = (req, res) => {
    let id = req.body['id'];
    let reqBody = req.body;

    MemberModel.updateOne(
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

exports.deleteMember = (req, res) => {
    let id = req.body['id'];

    MemberModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
