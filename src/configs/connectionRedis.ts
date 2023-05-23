import { createClient } from 'redis';
import { config } from 'dotenv';

config();

const client = createClient({
  url: process.env.REDIS_URL!,
});

client.on('connect', () => console.log('Initiating a connection to the Redis server'));
client.on('ready', () => console.log('Redis Client is ready to use'));
client.on('end', () => console.log('Redis connection has been closed'));
client.on('error', (err) => console.error('Redis Client Error', err));
client.on('reconnecting', () =>
  console.error('Redis Client is trying to reconnect to the Redis server')
);

(async () => {
  await client.connect();
})();

// Close connection when stop app
process.on('exit', () => {
  client.disconnect();
});

export default client;
