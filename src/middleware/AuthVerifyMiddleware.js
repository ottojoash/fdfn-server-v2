const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../../config.env' });

module.exports = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, `${process.env.SECRET_KEY_JWT}`, (err, decoded) => {
        if (err) {
            res.status(400).json({ status: 'authorized', data: err });
        } else {
            let email = decoded['data']['email'];
            req.headers.email = email;
            next();
        }
    });
};
