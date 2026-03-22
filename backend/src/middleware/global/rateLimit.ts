const rateLimit = require('express-rate-limit');
const config = require('@utils/configs');

module.exports = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min
    limit: 100, // click 100 times / per minutes
    skip: () => config.NODE_ENV === 'dev',
});