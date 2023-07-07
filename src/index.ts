import express, { Express, Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';
import route from './routes';
import cookieParser from 'cookie-parser';
import { sequelize } from './configs/sequelize';
import { ResJSON } from './utils/interface';
import './configs/connectionRedis';
import { Log, getProcessId, handleServerDown } from './utils/function';
import { Logger } from './configs/logger';
import moment from 'moment';

const app: Express = express();

app.use(express.json()); // req.body
app.use(cookieParser()); // Allow server read cookie
app.use(express.urlencoded({ extended: true }));

// Connect database
sequelize
  .sync()
  .then((data) => {
    Log.writer().info(
      `[Info] Listify ${getProcessId()} - [Sequelize] ${moment().format(
        'DD/MM/YYYY'
      )}, ${moment().format('h:mm:ss A')} - All table async successfully`
    );
    console.log('All table async successfully');
  })
  .catch((err) => {
    Log.writer().info(
      `[WARN] Listify ${getProcessId()} - [Sequelize] ${moment().format(
        'DD/MM/YYYY'
      )}, ${moment().format('h:mm:ss A')} - All table async failed: ${JSON.stringify(err)}`
    );
    console.log('All table async failed: ', err);
  });

Logger(app);
route(app);

// Handle error
app.use((req, res, next: NextFunction) => {
  next(createError.NotFound('This route does not exist.'));
});

app.use((err: HttpError, req: Request, res: Response<ResJSON>, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message,
    error: err.name,
  });
});

// Kiểm tra biến môi trường có PORT chạy server không? Nếu không lấy PORT 5000
const PORT = process.env.PORT || 5000;

// Server chạy với PORT được gán bên trên
app.listen(PORT, () => {
  Log.writer().info(
    `[Info] Listify ${getProcessId()} - [Server] ${moment().format(
      'DD/MM/YYYY'
    )}, ${moment().format('h:mm:ss A')} - Server has started on port ${PORT}`
  );
  console.log(`Server has started on port ${PORT}`);
});

process.on('SIGINT', () => handleServerDown());
