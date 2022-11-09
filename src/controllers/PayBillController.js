const PayBillModel = require('../models/PayBillModel');

exports.createBill = (req, res) => {
    let reqBody = req.body;

    PayBillModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readBill = (req, res) => {
    PayBillModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updateBill = (req, res) => {
    let userId = req.body['userId'];
    let reqBody = req.body;

    PayBillModel.updateOne(
        { userId: userId },
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

exports.deleteBill = (req, res) => {
    let id = req.body['_id'];

    PayBillModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
