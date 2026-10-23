import express from "express";
import { getUsersController } from "../../controllers/users.controller.js";

const userRouter = express.Router();
userRouter.get("/users", getUsersController)
export default userRouter;
