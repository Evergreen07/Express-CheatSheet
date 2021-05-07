const moment = require('moment');

const logger = (req, res, next) => {
    console.log('Hello from Middleware');
    console.log(`1. ${req.protocol}  2. ${req.get('host')}  3. ${req.url}`);
    console.log(`Moment : ${moment().format()}`);
    console.log(`Date : ${moment().date()}  Time : ${moment().calendar()}  UTC : ${moment().utc()}`);
    console.log(`Moment : ${moment().weekday()}`);
    next();
};

module.exports = logger;