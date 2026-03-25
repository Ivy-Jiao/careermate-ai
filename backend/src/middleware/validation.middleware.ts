import type { Request, Response, NextFunction } from 'express';
import type { ZodType } from 'zod';

const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues.map(i => i.message).join(', ');
      res.status(400).json({ success: false, message });
      return;
    }

	req.body = result.data;
	next();
  };

  export default validate;