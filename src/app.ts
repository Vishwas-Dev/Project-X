
import express from "express";
import v1Router from "./router/v1/index.router.js";

const app = express();

app.use(express.json());

// Add routes and middleware here
app.use("/api/v1", v1Router); // Assuming v1Router is defined and imported

export default app;