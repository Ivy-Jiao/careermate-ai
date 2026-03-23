import rateLimit from 'express-rate-limit';
import config from '@utils/configs.js';

export default rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min
    limit: 100, // click 100 times / per minutes
    skip: () => config.NODE_ENV === 'dev',
});