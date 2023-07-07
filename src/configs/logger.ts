import { Express, Request, Response } from 'express';
import logger from 'morgan';
import { getProcessId, Log } from '../utils/function';
import moment from 'moment';
import { LogResponse, ResJSON } from '../utils/interface';
import { IPayload } from '../utils/jwt_service';
import createError from 'http-errors';
import fs from 'fs';

export const Logger = (app: Express) => {
  logger.token('logLevel', (req: Request, res: Response) => {
    const status = res.statusCode;

    return status >= 400 ? 'ERROR' : 'INFO';
  });

  logger.token('appName', () => {
    return process.env.APP_NAME!;
  });

  logger.token('pid', () => {
    return getProcessId();
  });

  logger.token('time', () => {
    return moment().format('DD/MM/YYYY');
  });

  logger.token('datetime', () => {
    return moment().format('h:mm:ss A');
  });

  logger.token('logRespond', (req: Request, res: Response<ResJSON, { payload: IPayload }>) => {
    const now = Date.now();

    const resJSON: ResJSON = {
      statusCode: res.statusCode,
      message: res.statusMessage,
      error: createError(res.statusCode).name,
    };

    const log: LogResponse = {
      ApiName: req.url,
      UserId: res.locals.payload?.user?.mail,
      Request: JSON.stringify({
        headers: req.headers,
        body: req.body,
        query: req.query,
      }),
      Response: JSON.stringify(resJSON),
      Elapsed: `${Date.now() - now} ms`,
    };

    return JSON.stringify(log);
  });

  logger.token('splitter', () => {
    return '\x1b[36m--------------------------------------------\x1b[0m\n';
  });

  logger.format(
    'access',
    '[:logLevel] :appName :pid  - :time, :datetime [:method] :url - Status: :status, Size: :res[content-length] bytes, Time: :total-time ms'
  );

  logger.format(
    'error',
    '[:logLevel] :appName :pid :time, :datetime [:method] :url - Status: :status - :logRespond'
  );

  app.use(
    logger(
      '[:logLevel] :appName :pid  - :time, :datetime [:method] :url - Status: :status, Size: :res[content-length] bytes, Time: :total-time ms'
    )
  );

  app.use(
    logger('access', {
      stream: fs.createWriteStream(Log.makeAccessFilePath(), { flags: 'a' }),
    })
  );

  app.use(
    logger('error', {
      skip: (req: Request, res: Response) => res.statusCode < 400,
      stream: fs.createWriteStream(Log.makeErrorFilePath(), { flags: 'a' }),
    })
  );
};
