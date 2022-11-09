const ProfileModel = require('../models/ProfileModel');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../config.env' });

exports.UserLogin = (req, res) => {
    let fullName = req.body['fullName'];
    let email = req.body['email'];

    let data = {
        fullName: fullName,
        email: email,
    };

    ProfileModel.create(data, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            if (data.length > 0) {
                const payload = {
                    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                    data: data[0],
                };
                const token = jwt.sign(
                    payload,
                    `${process.env.SECRET_KEY_JWT}`
                );

                res.status(200).json({
                    status: 'success',
                    token,
                    data: data[0],
                });
            } else {
                res.status(401).json({ status: 'unauthorized', data: err });
            }
        }
    });
};

exports.SelectProfile = (req, res) => {
    let email = req.headers['email'];

    ProfileModel.find({ email: email }, (err, data) => {
        if (err) {
            res.status(400).json({ status: 'fail', data: err });
        } else {
            res.status(200).json({ status: 'success', data: data });
        }
    });
};
