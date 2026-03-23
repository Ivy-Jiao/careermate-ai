import winston from 'winston';
import config from '@utils/configs.js';

const logger = winston.createLogger({
    level: config.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format((info: any) => {
            if (info.req) {
                const req = info.req as { method?: string; originalUrl?: string };
                info.req = {
                    method: req.method,
                    url: req.originalUrl,
                };
            }
            if (info.err) {
                const err = info.err as { message?: string; stack?: string };
                info.err = {
                    message: err.message,
                    stack: err.stack,
                };
            }
            return info;
        })(),
        winston.format.printf(({ timestamp, level, message, ...meta }: Record<string, unknown>) => {
            let log = `[${timestamp}] [${level}]: ${message}`;
            if (Object.keys(meta).length > 0) {
                log += ` ${JSON.stringify(meta)}`;
            }

            return log;
        })
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

export default logger;
