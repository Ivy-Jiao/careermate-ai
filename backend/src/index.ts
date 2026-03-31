import app from './app.js';
import config from '@utils/config.js';
import connectDB from '@utils/db.js';
import logger from '@utils/logger.js';

process.on('unhandledRejection', (err) => {
    logger.error('unhandled rejection', {err});
});
process.on('uncaughtException', (err) => {
    logger.error('Uncaught exception', {err});
});

const start = async () => {
    await connectDB();

    app.listen(config.PORT, () => {
        logger.info(`[${config.NODE_ENV}] Server listening on port ${config.PORT}`);
    });
}

start();