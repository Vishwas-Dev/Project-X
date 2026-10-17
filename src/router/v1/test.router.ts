import express from "express";

const testRouter = express.Router();

testRouter.post('/test', (req, res)=> {
    res.json({ message: 'Test route is working!' });
})

export default testRouter;