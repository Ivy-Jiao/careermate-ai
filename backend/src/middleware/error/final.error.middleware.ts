const logger = require('@utils/logger');
const config = require('@utils/configs');
import type { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
  status?: number;
  code?: string | number;
}

const finalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Final Error Middleware', {
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    params: req.params,
    query: req.query,
    status: err.status || 500,
    message: err.message,
    stack: err.stack,
  });

  const status = err.status || 500;
  const message = err.message || 'Something unexpected happened';

  res.status(status).json({
    error: {
      code: err.code || status,
      message,
      ...(config.NODE_ENV === 'dev' && { stack: err.stack }),
    },
  });
};

module.exports = finalErrorHandler;