import express from "express";
import v1Router from "./routers/v1/index.router.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation-id.middleware.js";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 10, // Maximum 10 requests per window per client IP
  standardHeaders: "draft-8",
  legacyHeaders: false,
});


const app = express();
app.use(helmet()); // Add helmet for security headers
app.use(cors({ origin: "http://localhost:5173" })); // Add CORS middleware
app.use(express.json());
 app.use(attachCorrelationIdMiddleware); // the correlation ID middleware
 app.use(limiter);
// routes and middleware here
app.use("/api/v1", v1Router); //  v1Router is defined and imported
// app.use("/api/v1", v1Router); //  v1Router is defined and imported
app.use(errorHandler); 

export default app;