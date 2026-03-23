import authRouter from '@auth/auth.routes.js';
import { Router } from 'express';

const v1Router = Router();

v1Router.use('/auth', authRouter);

export default v1Router;