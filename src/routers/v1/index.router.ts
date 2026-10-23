import  express  from "express";
import testRouter from "./test.router.js";
import { getUsersController } from "../../controllers/users.controller.js";
import userRouter from "./user.router.js";

const v1Router = express.Router();

v1Router.use('', testRouter);
v1Router.use('', userRouter);

export default v1Router;