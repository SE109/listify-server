import fs from 'fs';
import path from 'path';
import moment from 'moment';
import { Console } from 'console';
import { sequelize } from '../configs/sequelize';
import client from '../configs/connectionRedis';

export const constants = {
  accessPath: path.join(__dirname, '../../logs/access/'),
  errorPath: path.join(__dirname, '../../logs/error/'),
  infoPath: path.join(__dirname, '../../logs/info/'),
};

export const createByPath = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

export const Log = {
  makeAccessFilePath: () => {
    createByPath(constants.accessPath);
    return `${constants.accessPath}/access-${moment().format('YYYY-MM-DD')}.log`;
  },
  makeErrorFilePath: () => {
    createByPath(constants.errorPath);
    return `${constants.errorPath}/error-${moment().format('YYYY-MM-DD')}.log`;
  },
  makeInfoFilePath: () => {
    createByPath(constants.infoPath);
    return `${constants.infoPath}/info-${moment().format('YYYY-MM-DD')}.log`;
  },
  writer: () => {
    return new Console({
      stdout: fs.createWriteStream(Log.makeInfoFilePath(), { flags: 'a' }),
      stderr: fs.createWriteStream(Log.makeErrorFilePath(), { flags: 'a' }),
    });
  },
};

export const getProcessId = (): string => {
  const pid = process.pid.toString();
  return pid.length === 4 ? `${pid} ` : pid;
};

export const startLog = (): string => {
  return `\n---------------- START ----------------`;
};

export const endLog = (): string => {
  return `---------------- END ----------------\n`;
};

export const handleServerDown = () => {
  Log.writer().info(
    `[INFO] Listify ${getProcessId()} - [Server] ${moment().format(
      'DD/MM/YYYY'
    )}, ${moment().format('h:mm:ss A')} - Redis Client stop app`
  );
  client.disconnect();

  Log.writer().info(
    `[INFO] Listify ${getProcessId()} - [Server] ${moment().format(
      'DD/MM/YYYY'
    )}, ${moment().format('h:mm:ss A')} - Sequelize stop app`
  );
  sequelize.close();

  Log.writer().info(endLog());

  setTimeout(() => {
    process.exit(0);
  }, 1000);
};
