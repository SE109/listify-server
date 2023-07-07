import { createClient } from 'redis';
import { config } from 'dotenv';
import { Log, getProcessId } from '../utils/function';
import moment from 'moment';

config();

export const client = createClient({
  url: process.env.REDIS_URL!,
});

client.on('connect', () => {
  Log.writer().info(
    `[INFO] Listify ${getProcessId()} - [Redis] ${moment().format('DD/MM/YYYY')}, ${moment().format(
      'h:mm:ss A'
    )} - Initiating a connection to the Redis server`
  );
  console.log('Initiating a connection to the Redis server');
});
client.on('ready', () => {
  Log.writer().info(
    `[INFO] Listify ${getProcessId()} - [Redis] ${moment().format('DD/MM/YYYY')}, ${moment().format(
      'h:mm:ss A'
    )} - Redis Client is ready to use`
  );
  console.log('Redis Client is ready to use');
});
client.on('end', () => {
  Log.writer().info(
    `[INFO] Listify ${getProcessId()} - [Redis] ${moment().format('DD/MM/YYYY')}, ${moment().format(
      'h:mm:ss A'
    )} - Redis connection has been closed`
  );
  console.log('Redis connection has been closed');
});
client.on('error', (err) => {
  Log.writer().info(
    `[ERROR] Listify ${getProcessId()} - [Redis] ${moment().format(
      'DD/MM/YYYY'
    )}, ${moment().format('h:mm:ss A')} - Redis Client Error: ${JSON.stringify(err)}`
  );
  console.error('Redis Client Error', err);
});
client.on('reconnecting', () => {
  Log.writer().info(
    `[WARN] Listify ${getProcessId()} - [Redis] ${moment().format('DD/MM/YYYY')}, ${moment().format(
      'h:mm:ss A'
    )} - Redis Client is trying to reconnect to the Redis server`
  );
  console.error('Redis Client is trying to reconnect to the Redis server');
});

(async () => {
  await client.connect();
})();

// Close connection when stop app
// process.on('exit', () => {
//   Log.writer().info(`[INFO] Listify ${getProcessId()} [Server] Redis Client stop app`);
//   client.disconnect();
// });

export default client;
