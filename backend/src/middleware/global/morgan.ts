import morgan from 'morgan';
import logger from '@utils/logger.js';
import config from '@utils/config.js';

export default morgan(config.NODE_ENV !== 'dev' ? 'combined' : 'dev', {
	stream: { write: (msg: string) => logger.info(msg.trim()) },
});