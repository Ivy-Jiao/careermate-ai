import mongoose from 'mongoose';
import logger from '@utils/logger.js';
import config from '@utils/config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI as string);
        logger.info('DB connected');
    } catch (error) {
        logger.error('DB connection failed', { error });
        process.exit(1);
    }
};

export default connectDB;