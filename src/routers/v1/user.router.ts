import express from "express";
import { NotFoundError } from "../../utils/errors/app.error.js";
import { userSchema } from "../../validators/user.validator.js";
import { validateHandler } from "../../middlewares/validate.middleware.js";
import logger from "../../config/logger.config.js";
import { getUsersController } from "../../controllers/users.controller.js";



const userRouter = express.Router();
userRouter.get("/users", getUsersController)
export default userRouter;
