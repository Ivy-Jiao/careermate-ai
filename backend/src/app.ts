import express from 'express';
// security middleware, avoid common attack
import helmet from 'helmet';
// logging middleware print http request 
import morgan from '@middleware/global/morgan.js';
import rateLimit from '@middleware/global/rateLimit.js';
import cors from 'cors';
import setupSwagger from '@utils/swagger/swagger.js';
import errorHandler from '@middleware/error/final.error.middleware.js';
import v1Router from 'routes.js';

const app = express();
app.use(helmet());
app.use(rateLimit);
app.use(morgan);
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use('/v1', v1Router);

app.use(errorHandler);
export default app;
