import winston from 'winston';
import app from "./app.js";
import { env } from "./config/env.js";
import logger from './config/logger.config.js';

app.listen(env.PORT, () => {
  logger.info("Server started");
  console.log(`Server running on http://localhost:${env.PORT}`);


});