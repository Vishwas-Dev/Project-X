import  express  from "express";
import testRouter from "./test.router.js";

const v1Router = express.Router();

v1Router.use('', testRouter);

export default v1Router;