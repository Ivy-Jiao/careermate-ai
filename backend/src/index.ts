const app = require('./app');
const config = require('@utils/configs');
const connectDB = require('@utils/db');
const logger = require('@utils/logger');

const start = async () => {
    await connectDB();

    app.listen(config.PORT, () => {
        logger.info(`[${config.NODE_ENV}] Server listening on port ${config.PORT}`);
    });
}

