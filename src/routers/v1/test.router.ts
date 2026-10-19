import express from "express";
import { NotFoundError } from "../../utils/errors/app.error.js";
import { userSchema } from "../../validators/user.validator.js";

const testRouter = express.Router();

testRouter.post('/test', validate(userSchema), (req, res)=> {
    res.json({ message: 'Test route is working!' });
})
testRouter.post('/error-test', ()=> {
    throw new NotFoundError("user not found")
})
testRouter.get("/server-error-test", () => {
  throw new Error("Internal database details");
});



export default testRouter;