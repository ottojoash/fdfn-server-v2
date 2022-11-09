const CoverageModel = require('../models/CoverageModel');

exports.createCoverage = (req, res) => {
    const coverageData = req.body;
    CoverageModel.create(coverageData, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readCoverage = (req, res) => {
    CoverageModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteCoverage = (req, res) => {
    let id = req.body['id'];

    CoverageModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
