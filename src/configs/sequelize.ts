import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';
import * as models from '../models';
import { Log, getProcessId } from '../utils/function';
import moment from 'moment';

config();

// Declare sequelize instance with database information.
const sequelize = new Sequelize(
  process.env.PG_DATABASE!,
  process.env.PG_USER!,
  process.env.PG_PASSWORD!,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    logging: false,
    models: Object.values(models),
  }
);

// Check connection to PostgreeDB
sequelize
  .authenticate()
  .then(() => {
    Log.writer().info(
      `[Info] Listify ${getProcessId()} - [Postgres] ${moment().format(
        'DD/MM/YYYY'
      )}, ${moment().format('h:mm:ss A')} - Connected successfully`
    );
    console.log('Connected successfully');
  })
  .catch((err) => {
    Log.writer().info(
      `[ERROR] Listify ${getProcessId()} - [Postgres] ${moment().format(
        'DD/MM/YYYY'
      )}, ${moment().format('h:mm:ss A')} - Unable connect to database: ${JSON.stringify(err)}`
    );
    console.log('Unable connect to database: ', err);
  });

// Close connection when stop app
// process.on('exit', () => {
//   Log.writer().info(`[INFO] Listify ${getProcessId()} [Server] Sequelize stop app`);
//   sequelize.close();
// });

export { sequelize };
