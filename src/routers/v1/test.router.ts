import express from "express";
import { NotFoundError } from "../../utils/errors/app.error.js";
import { userSchema } from "../../validators/user.validator.js";
import { validateHandler } from "../../middlewares/validate.middleware.js";

const testRouter = express.Router();

testRouter.post('/test', validateHandler(userSchema), (req, res)=> {
    res.status(200).json({
        success: true,
        message: "Validation passed",
        data: req.body
    });
})
testRouter.post('/error-test', ()=> {
    throw new NotFoundError("user not found")
})
testRouter.get("/server-error-test", () => {
  throw new Error("Internal database details");
});



export default testRouter;