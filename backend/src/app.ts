const express = require('express');
// security middleware, avoid common attack
const helmet = require('helmet');
// logging middleware print http request 
const morgan = require('@middleware/global/morgan');
const rateLimit = require('@middleware/global/rateLimit');
const cors = require('cors');
const setupSwagger = require('@utils/swagger');
const errorHandler = require('@middleware/error/final.error.middleware');

const app = express();
app.use(helmet());
app.use(rateLimit);
app.use(morgan);
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use(errorHandler);
module.exports = app;

