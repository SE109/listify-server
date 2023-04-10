import { Express } from 'express';
import testRoute from './test.route';

const route = (app: Express) => {
  app.use('/test', testRoute);
};

export default route;
