const mongoose = require('mongoose');
const logger = require('@utils/logger');
const config = require('@utils/configs');

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
        logger.info('DB connected');
    } catch (error) {
        logger.error('DB connection failed', { error });
        process.exit(1);
    }
};

module.exports = connectDB;