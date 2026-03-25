import express from 'express';
import authController from '@auth/auth.controller.js';
import validate from '@middleware/validation.middleware.js';
import { loginSchema, registerSchema } from '@users/user.validation.js';

const authRouter = express.Router();

authRouter.post('/login', validate(loginSchema), authController.login);
authRouter.post('/register', validate(registerSchema), authController.register);

export default authRouter;