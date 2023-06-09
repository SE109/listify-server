import { Express } from 'express';

import testRoute from './test.route';
import authRoute from './auth.route';
import userRoute from './user.route';
import groupTaskRoute from './groupTask.route';
import taskRoute from './task.route';
import subTaskRoute from './subTask.route';
import voiceRoute from './voice.route';
import searchRoute from './search.route';
import apiDocsRoute from './api-docs.route';

const route = (app: Express) => {
  app.use('/api-docs', apiDocsRoute);
  app.use('/auth', authRoute);
  app.use('/user', userRoute);
  app.use('/gtask', groupTaskRoute);
  app.use('/task', taskRoute);
  app.use('/subtask', subTaskRoute);
  app.use('/voice', voiceRoute);
  app.use('/search', searchRoute);
  app.use('/test', testRoute);
};

export default route;
