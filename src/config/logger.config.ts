import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers.js";

const logger = winston.createLogger({
  level: "debug",

  transports: [
    // Human-readable, colored terminal output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        
        winston.format.colorize({ all: true }),
        winston.format.printf(({ level, message, timestamp, ...data }) => {
          return `${timestamp} [${level}] [${getCorrelationId()}]: ${message} ${
            Object.keys(data).length ? JSON.stringify(data) : ""
          }`;
        }),
      ),
    }),

    // Clean structured logs for production tools
    new winston.transports.File({
      filename: "logs/combined.log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
});

export default logger;