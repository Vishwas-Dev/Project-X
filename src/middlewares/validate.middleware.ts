import type { RequestHandler } from "express";
import type { z } from "zod";

export const validate = (schema: z.ZodType): RequestHandler => {
     return (req, res, next) => {
          // validation logic
          const result = schema.safeParse(req.body);
          if (!result.success) {
               return res.status(400).json({
                    success: false,
                    message: "Validation failed",
                    error: result.error.issues.map( (issue)=> ({
                         field: issue.path.join("."),
                         message: issue.message
                    }))
               });
          }
          next();
     };
};