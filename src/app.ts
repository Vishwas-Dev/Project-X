
import express from "express";

const app = express();

app.use(express.json());

// Add routes and middleware here
app.use("/api/v1", (req, res) => {
  res.send("API v1 is working!");
});

export default app;