const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import type { Express } from 'express';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'CareerMate API',
      version: '1.0.0',
      description: 'API documentation',
    },
  },
  apis: ['./src/utils/swagger/swagger.yml'],
};


/** only generate once, not every time */
const specs = swaggerJsdoc(options);

const setupSwagger = (app: Express): void => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = setupSwagger;

// generate api docs in http://localhost:8000/api-docs/