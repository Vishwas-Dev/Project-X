import winston from "winston";
import { getCorrelationId } from "../utils/helpers/request.helpers.js";

const correlationFormat = winston.format((info) => {
  const correlationId = getCorrelationId();
    if (correlationId !== "unknown") {
    info.correlationId = correlationId;
  }
  return info;
});

const logger = winston.createLogger({
  level: "debug",

  //  sending records to transports.
  format: correlationFormat(),

  transports: [
    // Human-readable, colored terminal output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: "YYYY-MM-DD HH:mm:ss",
        }),
        
        winston.format.printf(({ level, message, timestamp, correlationId, ...data }) => {
          return `Timestamp: ${timestamp}, Level:[${level}], CorrelationID: ${correlationId}, Message: ${message}, Data:${
            Object.keys(data).length ? JSON.stringify(data) : ""
          }`;
        }),
        winston.format.colorize({ all: true }),
      ),
    }),

    // Clean structured logs
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