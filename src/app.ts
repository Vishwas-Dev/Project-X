import express from "express";
import v1Router from "./routers/v1/index.router.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { attachCorrelationIdMiddleware } from "./middlewares/correlation-id.middleware.js";

const app = express();

app.use(express.json());
 app.use(attachCorrelationIdMiddleware); // the correlation ID middleware
// routes and middleware here
app.use("/api/v1", v1Router); //  v1Router is defined and imported
app.use(errorHandler); 

export default app;