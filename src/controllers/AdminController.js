const AdminModel = require('../models/AdminModel');

exports.createAdmin = (req, res) => {
    let reqBody = req.body;

    AdminModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.readAdmins = (req, res) => {
    AdminModel.find({}, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.deleteAdmin = (req, res) => {
    let id = req.body['id'];
    AdminModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};

exports.isAdmin = (req, res) => {
    let email = req.query.email;
    AdminModel.findOne(
        {
            adminEmail: email,
            adminRole: 'Admin',
        },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                if (data?.adminRole === 'Admin') {
                    res.status(200).json({ status: 'success', data: data });
                } else {
                    res.status(400).json({
                        status: 'fail',
                        data: 'You are not admin',
                    });
                }
            }
        }
    );
};

exports.isModerator = (req, res) => {
    let email = req.query.email;
    AdminModel.findOne(
        {
            adminEmail: email,
            adminRole: 'Moderator',
        },
        (err, data) => {
            if (err) {
                res.status(400).json({ status: 'fail', data: err });
            } else {
                if (data?.adminRole === 'Moderator') {
                    res.status(200).json({ status: 'success', data: data });
                } else {
                    res.status(400).json({
                        status: 'fail',
                        data: 'You are not moderator',
                    });
                }
                // console.log(data);
                // res.status(200).json({ status: 'success', data: data });
            }
        }
    );
};
