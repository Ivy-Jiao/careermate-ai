import ValidationException from '@exceptions/validation.exception.js';
import type { Request, Response, NextFunction } from 'express';
import type { ZodType } from 'zod';

const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues.map(i => i.message).join(', ');
      throw new ValidationException(message);
    }

	req.body = result.data;
	next();
  };

  export default validate;