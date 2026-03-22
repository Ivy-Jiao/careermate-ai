const morgan = require('morgan');
const logger = require('@utils/logger');
const config = require('@utils/configs');

module.exports = morgan(config.NODE_ENV !== 'dev' ? 'combined' : 'dev', {
	stream: { write: (msg: string) => logger.info(msg.trim()) },
});