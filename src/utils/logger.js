'use strict';

const winston = require('winston');
const { combine, printf, simple } = winston.format;

const DEFAULT_LOGGING_LEVEL = process.env.DEFAULT_LOGGING_LEVEL || 'info';

const loggingFormat = printf(info => {
  return `${info.level.toUpperCase()}: ${info.message}`;
});

const transports = {
  console: new winston.transports.Console({ level: DEFAULT_LOGGING_LEVEL})
};

const logger = winston.createLogger({
  format: combine(
    simple(),
    loggingFormat
  ),
  transports: [
    transports.console
  ]
});

/**
 * Public functions
 */
const changeLoggingLevel = (level) => {
  if (isLevelValid(level)) {
    logger.log('warn', `Logging level changed [${level}]`);
    transports.console.level = level;
  } else {
    logger.log('error', `Unknown logging level passed [${level}]`);
  }
}

/**
 * Private functions
 */
const isLevelValid = (level) => {
  return ['error', 'warn', 'info', 'verbose', 'debug', 'silly'].includes(level);
}

module.exports = {changeLoggingLevel, logger};
