const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log('This application running port @5000');
});
