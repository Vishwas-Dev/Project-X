import { randomUUID } from "node:crypto";
import { asyncLocalStorage } from "../utils/helpers/request.helpers.js";

import type { NextFunction, Request, Response } from "express";

export const attachCorrelationIdMiddleware = (_req: Request, res: Response, next: NextFunction) => {
    const correlationId = randomUUID();
    res.setHeader("x-correlation-id", correlationId);
    
    asyncLocalStorage.run({correlationId : correlationId}, ()=>{
        next();
    })
}