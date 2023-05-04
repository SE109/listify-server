import { Express } from 'express';

import testRoute from './test.route';
import authRoute from './auth.route';
import groupTaskRoute from './groupTask.route';
import apiDocsRoute from './api-docs.route';

const route = (app: Express) => {
  app.use('/api-docs', apiDocsRoute);
  app.use('/auth', authRoute);
  app.use('/gtask', groupTaskRoute);
  app.use('/test', testRoute);
};

export default route;
