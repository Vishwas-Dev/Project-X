import "dotenv/config";


const PORT = Number(process.env.PORT) || 5000;

export const env = {
  PORT,
  NODE_ENV: process.env.NODE_ENV || "development",
};