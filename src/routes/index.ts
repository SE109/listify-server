import { Express } from 'express';
import testRoute from './test.route';
import apiDocsRoute from './api-docs.route';

const route = (app: Express) => {
  app.use('/api-docs', apiDocsRoute);
  app.use('/test', testRoute);
};

export default route;
