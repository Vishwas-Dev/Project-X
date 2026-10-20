import winston from "winston";

const logger = winston.createLogger({
  level: "debug",

  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.colorize({ all: true }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    }),
  ),

  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

export default logger;