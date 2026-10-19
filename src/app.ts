import express from "express";
import v1Router from "./routers/v1/index.router.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";

const app = express();

app.use(express.json());

// Add routes and middleware here
app.use("/api/v1", v1Router); // Assuming v1Router is defined and imported
app.use(errorHandler); 

export default app;