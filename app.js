const express = require('express');
const router = require('./src/routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: './config.env' });

// App Configuring
const app = new express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/src/uploads')));

//Security middleware import
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');

//Express rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 150 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Middleware implements
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());
app.use(limiter);

//Mongodb Connect by mongoose
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER_NAME}.${process.env.DB_HOSTNAME}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URI, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected successful');
    }
});

app.use('/api/v1', router);

app.use('*', (req, res) => {
    res.status(404).json({ status: 'fail', data: 'This route is not exist.' });
});

module.exports = app;
