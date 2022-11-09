const ProductBillModel = require('../models/ProductBillModel');

exports.createProductBill = (req, res) => {
    let reqBody = req.body;

    ProductBillModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readProductBills = (req, res) => {
    ProductBillModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.updateProductBill = (req, res) => {
    let id = req.body['id'];
    let reqBody = req.body;

    ProductBillModel.updateOne(
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

exports.deleteProductBill = (req, res) => {
    let id = req.body['id'];

    ProductBillModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readProductBillByEmail = (req, res) => {
    let email = req.query['email'];

    ProductBillModel.find({ email: email }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
